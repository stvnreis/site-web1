'use client'

import { enqueueSnackbar } from "notistack";
import { TProduto } from "../../../types";
import { cartItems, addItemToCart } from "../../activeCart";
import { items } from "../../items";
import { ProdutoCard } from "../components/ProdutoCard";

export default function PromocoesPage() {
  const cafeteria = items.filter((item) => item.categoria === 'CAFETERIA')
  const combos = items.filter((item) => item.categoria === 'COMBOS')
  const padaria = items.filter((item) => item.categoria === 'PADARIA')

  const handleClick = (e: MouseEvent, produto: TProduto) => {
    e.preventDefault()
    console.log(cartItems)
    addItemToCart(produto)

    enqueueSnackbar(`${produto.descricao} adicionado ao carrinho!`, {variant:'success', autoHideDuration: 2500})
  }
  
  return <main className="p-10 flex flex-col items-center justify-center gap-10 bg-primary opacity-80 rounded-lg">
    <h1 className="text-white font-bold text-lg">Bebidas</h1>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
      {cafeteria.map((bebida) => <ProdutoCard
        item={bebida as TProduto}
        handleClick={handleClick}
        key={`${bebida.descricao} - ${bebida.categoria}`}
      />)}
    </div>
    <h1 className="text-white font-bold text-lg">Padaria</h1>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
      {padaria.map((item) => <ProdutoCard
        item={item as TProduto}
        handleClick={handleClick}
        key={`${item.descricao} - ${item.categoria}`}
      />)}
    </div>
    <h1 className="text-white font-bold text-lg">Combos</h1>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
      {combos.map((combo) => <ProdutoCard
        item={combo as TProduto}
        handleClick={handleClick}
        key={`${combo.descricao} - ${combo.categoria}`}
      />)}
    </div>
  </main>
}