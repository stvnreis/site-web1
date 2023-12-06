'use client'

import { useQuery } from "@tanstack/react-query";
import { TApiResponse, TProduto } from "../types";
import { getUser, getPassword } from "./activeUser";
import { Api } from "./lib/axios";
import { ProdutoCard } from "./produtos/components/ProdutoCard";
import { useSnackbar } from "notistack";
import { cartItems, addItemToCart } from "./activeCart";

export default function Home() {
  const {enqueueSnackbar} = useSnackbar()
  const handleClick = (e: MouseEvent, produto: TProduto) => {
    e.preventDefault()
    console.log(cartItems)
    addItemToCart(produto)

    enqueueSnackbar(`${produto.descricao} adicionado ao carrinho!`, {variant:'success', autoHideDuration: 2500})
  }

 const {data, isLoading, isError} = useQuery({
    queryKey: ['fetchProdutosFromHomePage'],
    retry: 0,
    queryFn: async () => {
      const { data } = await Api.get('api/produtos', {
        headers: {
          user: getUser(),
          password: getPassword()
        }
      })

      return data as TApiResponse<TProduto[]>
    }
 })
  
  return (
    <main className="mt-10">
      <div className="p-10 flex flex-col justify-center items-center w-full bg-primary opacity-80 h-auto rounded-lg">
        <h1 className="text-white font-bold text-lg mb-10">Produtos em Destaque</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {(!isLoading && !isError && Array.isArray(data?.data)) && data?.data.map((produto) => <ProdutoCard
          item={produto}
          key={produto.descricao}
          handleClick={handleClick}
          />)}
        </div>
      </div>
    </main>
  )
}
