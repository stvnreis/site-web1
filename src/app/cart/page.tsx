'use client'

import { cartItems, cartItemsProps, clearCart, setCartItems } from "../activeCart";
import { getCookie } from "cookies-next";
import { CartContainer } from "./components/CartContainer";
import { TVendaProdutoPostRequest } from "@/types";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { Api } from "../lib/axios";
import { getPassword, getUser } from "../activeUser";
import router, { useRouter } from "next/navigation";

export default function CartPage() {  
  const router = useRouter()
  
  const [cart, setCart] = useState(cartItems)
  const [isLoading, setIsLoading] = useState(false)  

  const removeItemFromCart = (idProduto: number) => {
    const items = cart.filter((item) => item.produto.id !== idProduto)
    setCart([...items])

    setCartItems(items)
  }

  const handleClick = () => {
    router.push('/cart/finalizar-venda')
  }

  return <div className="py-10 bg-primary opacity-80 rounded-lg min-h-[30rem]">
    <CartContainer
      items={cart}
      handleSubmit={handleClick}
      isLoading={isLoading}
      onRemove={removeItemFromCart}
    />
  </div>
}