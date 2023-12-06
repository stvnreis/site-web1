import { TComentario } from "../../types"
import { ComentarioCard } from "./ComentarioCard"
import {Button} from '@nextui-org/react'
import { ComentarioModal } from "./comentario-modal/ComentarioModal"

export type ComentarioWrapperProps = {
  comentarios: TComentario[]
  isOpen: boolean
  onOpen: () => void 
  onClose: () => void
  handleSave: (comentario: string) => void
}

export const ComentarioWrapper = ({comentarios, isOpen, onOpen, onClose, handleSave}: ComentarioWrapperProps) => {
  return <div className="flex flex-col items-center gap-10 text-black">
    <Button onClick={() => onOpen()}>Adicionar um Comentário</Button>
    <ComentarioModal isOpen={isOpen} onClose={onClose} handleSave={handleSave} />
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5">
      {comentarios.map((comentario) => {
        return <ComentarioCard
          key={`${comentario.pessoa.nome}`}
          comentario={comentario}
        />
      })}
    </div>
  </div>
}