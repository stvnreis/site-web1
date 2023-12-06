'use client'

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@nextui-org/react"
import { ChangeEvent, useState } from "react"

export type ComentarioModalProps = {
  isOpen: boolean
  onClose: () => void
  handleSave: (comentario: string) => void
}

export const ComentarioModal = ({ isOpen, onClose, handleSave }: ComentarioModalProps) => {
  const [comentario, setComentario] = useState('')

  const handleEdit = (event: ChangeEvent<HTMLInputElement>) => {
    setComentario(event.target.value)
  }

  return <Modal isOpen={isOpen} onClose={onClose} size="lg">
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader>
            Adicionar um comentário
          </ModalHeader>
          <ModalBody>
            <Textarea placeholder="Digite seu comentário aqui..." onChange={(e) => handleEdit(e)} />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancelar
            </Button>
            <Button onPress={() => handleSave(comentario)}>
              Salvar
            </Button>
          </ModalFooter>
          </>
      )}
    </ModalContent>
  </Modal>
}