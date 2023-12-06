'use client'

import { Button } from "@nextui-org/react";
import { Api } from "../lib/axios";
import { getCookie } from "cookies-next";

export default function AdminPage() {
  const handleBackup = () => {
    Api.get('api/backup', {
      headers: {
        user: getCookie('user') as string,
        password: getCookie('password') as string
      }
    })
  }

  return <Button onClick={() => handleBackup()}>Gerar Backup</Button>
}