import { Card, CardBody, CardHeader, Divider, Image, User } from "@nextui-org/react";
import { TComentario } from "@/types";

export const ComentarioCard = ({comentario}:{comentario: TComentario}) => {
  return <Card>
    <CardHeader>
      <User name={comentario.pessoa.nome} >
        <Image src={comentario.pessoa.fotoUrl} alt={comentario.pessoa.nome} />
      </User>
    </CardHeader>
    <Divider className="w-full" />
    <CardBody>
      <p>
        {comentario.comentario}
      </p>
    </CardBody>
  </Card>
}