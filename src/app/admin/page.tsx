'use client'

import { Button } from "@nextui-org/react";
import { Api } from "../lib/axios";
import { getCookie } from "cookies-next";
import { useSnackbar } from "notistack";

export default function AdminPage() {
  const { enqueueSnackbar } = useSnackbar()
  
  const handleBackup = async () => {
    try {
      const {data} = await Api.get('api/backup', {
        headers: {
          user: getCookie('user') as string,
          password: getCookie('password') as string
        }
      })

      enqueueSnackbar(data.message, {
        variant: 'success',
        autoHideDuration: 2000,
      })
    } catch (err: any) {
      enqueueSnackbar(err.response.data.message as string, {
        variant: 'error',
        autoHideDuration: 2000,
      })
    }
    
  }

  return <>
    <Button onClick={() => handleBackup()} color="primary" className="opacity-80">Gerar Backup</Button>
  </>
}