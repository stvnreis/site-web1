import { brlMoney } from "@/helpers/money/brlMoney";
import { cartItemsProps } from "../../activeCart";
import { Button, Card, CardBody, Image } from "@nextui-org/react";

export const CartItem = ({item, onRemove}:{item: cartItemsProps, onRemove: (idProduto: number) => void } ) => {
  return <Card className="h-32">
    <CardBody className="flex justify-center">
      <div className="flex justify-between gap-10 items-center">
        <Image src={item.produto.fotoUrl} alt="Foto Produto" width={100} height={100} />
        <span>{item.produto.descricao}</span>
        <span>Quantidade: {item.quantidade}</span>
        <span>Valor: {brlMoney(item.produto.valor * item.quantidade)}</span>
        <Button
          color="danger"
          className="flex"
          onClick={() => onRemove(item.produto.id)}
        >
          Remover Item
        </Button>
      </div>
    </CardBody>
  </Card>
}