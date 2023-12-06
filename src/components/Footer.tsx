'use client'

import { Button, useDisclosure } from "@nextui-org/react"
import { ComentarioModal } from "./comentarios/comentario-modal/ComentarioModal"

export const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSave = () => {
    onClose()
  }
  
  return <div className="p-3 mt-10 flex w-full bg-primary opacity-80 bottom-0 justify-between text-white">
    <p>єcσмм cαƒє</p>
    <p>(18) 99909-4675</p>
    <Button onClick={() => onOpen()}>Entrar em contato</Button>
    <ComentarioModal onClose={onClose} isOpen={isOpen} handleSave={handleSave}  />
  </div>
}