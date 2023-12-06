'use client'

import { useQuery } from "@tanstack/react-query"
import { Api } from "@/app/lib/axios"
import { TComentario, TProduto } from "@/types"
import { Button, Card, CardBody, Image, useDisclosure } from "@nextui-org/react"
import { brlMoney } from "@/helpers/money/brlMoney"
import { ComentarioWrapper } from "@/components/comentarios/ComentarioWrapper"
import { useState } from "react"
import { getPassword, getUser } from "../../activeUser"
import { addItemToCart } from "../../activeCart"
import { useSnackbar } from "notistack"

const coments: TComentario[] = [
  {
    pessoa: {
      nome: 'Steven',
      fotoUrl: 'aaaa.com.br'
    },
    comentario: 'Delicioso'
  },
  {
    pessoa: {
      nome: 'Ana Laura',
      fotoUrl: 'aaaa.com.br'
    },
    comentario: 'Ótimo para começar o dia'
  },
  {
    pessoa: {
      nome: 'João Victor',
      fotoUrl: 'aaaa.com.br'
    },
    comentario: 'Simplesmente perfeito, além de ter uma entrega super rápida.'
  },
]

export default function ProdutoPage({ params: { id } }: { params: { id: number } }) {
  const [comentarios, setComentarios] = useState(coments)
  const [errorMessage, setErrorMessage] = useState('')
  const {enqueueSnackbar} = useSnackbar()
  const {isOpen, onOpen, onClose} = useDisclosure()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['findProduto'],
    retry: 0,
    queryFn: async () => {
      try {
        const { data } = await Api.get(`api/produtos/${id}`, {
          headers: {
            user: getUser(),
            password: getPassword(),
          }
        })

        return data.data as TProduto
      } catch (err: any) {
        setErrorMessage(err.response.data.message)
      }
    }
  })

  const handleSave = (comentario: string) => {
    setComentarios([...comentarios, { pessoa: { nome: 'steven', fotoUrl: 'aaaa.com.br' }, comentario }])
    
    onClose()
  }

  const handleCarrinho = (produto: TProduto) => {
    addItemToCart(produto)

    enqueueSnackbar(`${produto.descricao} adicionado ao carrinho`, {
      variant: 'success',
      autoHideDuration: 2000,
    })
  }

  if (isLoading) return <div>carregando</div>
  
  if (isError) return <div>{errorMessage}</div>

  return <div className="bg-primary rounded-lg opacity-80 mx-5 p-10 h-fit text-white gap-20">
    <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-10">
      <div className="w-fit h-fit">
        <Image
          src={data!.fotoUrl}
          width={500}
          height={500}
          alt="Imagem produto"
        />
      </div>
      <div className="flex flex-col items-center gap-5 text-3xl">
        <h3 className="font-bold">{data?.descricao}</h3>
        <span>{`${brlMoney(data?.valor)}/un`}</span>
      </div>
      <div>
        <Card className="w-52 h-52 md:w-60 md:h-80" shadow="lg">
          <CardBody className="flex flex-col items-center justify-between">
            <span className="font-bold text-xs md:text-sm">Quantidade em Estoque: {data?.quantidade}</span>
            <Button onClick={() => handleCarrinho(data!)}>Adicionar ao carrinho</Button>
          </CardBody>
        </Card>
      </div>
    </div>
    <div className="mt-10">
      <ComentarioWrapper
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        handleSave={handleSave}
        comentarios={comentarios}
      />
    </div>
    
  </div>
}