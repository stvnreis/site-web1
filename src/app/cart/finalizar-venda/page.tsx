'use client'

import { Button, Input, useDisclosure } from "@nextui-org/react";
import { VendaFinalizadaModal } from "../../../components/modal/venda-finalizada/VendaFinalizadaModal";
import { getCookie } from "cookies-next";
import { enqueueSnackbar, useSnackbar } from "notistack";
import { TVendaProdutoPostRequest } from "../../../types";
import { cartItems, clearCart, cartItemsProps } from "../../activeCart";
import { getUser, getPassword } from "../../activeUser";
import { useState } from "react";
import { Api } from "../../lib/axios";

export default function FinalizarVendaPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const [isLoading, setIsLoading] = useState(false)
  
  const { enqueueSnackbar } = useSnackbar()

  const handleSell = async () => {
    try {
      setIsLoading(true)

      const {data} = await Api.post('api/vendas', {
        idFuncionario: Number(getCookie('idFuncionario')),
        produtos: toPostRequest(cartItems),
      },
        {
          headers: {
            user: getUser(),
            password: getPassword(),
          }
        }
      )

      enqueueSnackbar(data.message, {
        variant: 'success',
        autoHideDuration: 1500
      })

      clearCart();
    } catch (err: any) {
      console.log(err.response.data.message)
      enqueueSnackbar(err.response.data.message as string, {
        variant: 'error',
        autoHideDuration: 1500
      })
    } finally {
      setIsLoading(false)
    }
  }

  return <main className="flex flex-col bg-primary opacity-80 rounded-lg p-10 gap-10 text-white">
    <h1>Endereço de Entrega</h1>
    <div className="flex flex-col gap-5">
      <>
        <Input variant="bordered" 
          classNames={{
            inputWrapper: 'border-white'
          }}
          isRequired
          label="Endereço"
        />  
      </>
      <div className="flex gap-5">
        <Input variant="bordered" 
          classNames={{
            inputWrapper: 'border-white'
          }}
          label="Número"
        />
        <Input variant="bordered" 
          classNames={{
            inputWrapper: 'border-white'
          }}
          label="CEP"
        />
      </div>
      
    </div>
    <h1>Pagamento em Cartão</h1>
    <div className="flex gap-5">
      <Input variant="bordered" 
        classNames={{
          inputWrapper: 'border-white'
        }}
        label="Número do cartão"
      />
      <Input variant="bordered" 
        classNames={{
          inputWrapper: 'border-white'
        }}
        label="CCV"
      />
      <Input variant="bordered" 
        classNames={{
          inputWrapper: 'border-white'
        }}
        className=""
        type="date"
      />
    </div>
    <Button onClick={() => onOpen()}>Finalizar Venda</Button>
    <VendaFinalizadaModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onClose} />
  </main>
}

function toPostRequest(cartItems: cartItemsProps[]): TVendaProdutoPostRequest[] {
  return cartItems.map((item) => {
    return {
      id: item.produto.id,
      descricao: item.produto.descricao,
      valor: item.produto.valor,
      quantidade: item.quantidade,
    }
  })
}