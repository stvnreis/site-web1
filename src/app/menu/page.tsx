'use client'

import { useQuery } from "@tanstack/react-query"
import { getCookie } from "cookies-next"
import { ProdutoCard } from "./components/ProdutoCard"
import { TApiResponse, TProduto } from "@/types"
import { useSnackbar } from "notistack"
import { cartItems, addItemToCart } from "../activeCart"
import { Spinner } from "@nextui-org/react"
import { Api } from "../lib/axios"
import { ProdutoCategorias } from "./components/ProdutoCategorias"
import { getPassword, getUser } from "../activeUser"
import { useState } from "react"

export default function MenuPage() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [errorMessage, setErrorMessage] = useState('')

  const {data, isLoading, isError} = useQuery({
    queryKey: ['fetchProdutosFromMenu'],
    retry: 0,
    queryFn: async () => {
      try {
        const { data } = await Api.get('api/produtos', {
          headers: {
            user: getUser(),
            password: getPassword()
          }
        })

        return data as TApiResponse<TProduto[]>
      } catch (err: any) {
        setErrorMessage(err.response.data.message)
      }
    }
  })

  const handleClick = (e: MouseEvent, produto: TProduto) => {
    e.preventDefault()
    console.log(cartItems)
    addItemToCart(produto)

    enqueueSnackbar(`${produto.descricao} adicionado ao carrinho!`, {variant:'success', autoHideDuration: 2500})
  }

  const handleCategoriaFilter = (value: string) => {
    data?.data.filter((produto) => produto.descricao !== value)
  }

  return <div className="mt-10 px-10 flex justify-between">
    <div className="flex justify-center py-10 bg-white w-56 rounded-md ">
      <ProdutoCategorias handleClick={handleCategoriaFilter} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {(!isLoading && !isError && Array.isArray(data?.data)) && data?.data.map((produto) => <ProdutoCard
      item={produto}
      key={produto.descricao}
      handleClick={handleClick}
      />)}
      {isLoading && <Spinner color="primary" />}
      {isError && <div>{errorMessage}</div>}
    </div>
  </div>
}