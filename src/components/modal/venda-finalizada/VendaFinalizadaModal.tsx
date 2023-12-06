import React from "react";
import {Modal as NextUiModal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export type ModalProps = {
  isOpen
  onOpen
  onOpenChange
}

export const VendaFinalizadaModal = ({ isOpen, onOpen, onOpenChange }: ModalProps) => {
  const router = useRouter()

  const handleConfirm = () => {
    onOpenChange()

    router.push('/')
  }

  return (
    <>
      <NextUiModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Venda</ModalHeader>
              <ModalBody>
                Venda Finalizada com Sucesso
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="success" onPress={handleConfirm}>
                  Aceitar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </NextUiModal>
    </>
  );
}
