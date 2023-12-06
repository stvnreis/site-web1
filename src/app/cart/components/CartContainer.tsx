import { CartItem } from "./CartItem"
import { cartItemsProps } from "../../activeCart"
import { Button, Card, CardBody, Divider } from "@nextui-org/react"
import { sumArray } from "@/helpers/sumArray"
import { brlMoney } from "@/helpers/money/brlMoney"
import { useSnackbar } from "notistack"

export type CartContainerProps = {
  items: cartItemsProps[]
  isLoading: boolean
  handleSubmit: () => void
  onRemove: (idProduto: number) => void
}

export const CartContainer = ({ items, isLoading, handleSubmit, onRemove }: CartContainerProps) => {
  const { enqueueSnackbar } = useSnackbar()
  
  const handleRemove = (idProduto: number) => {
    onRemove(idProduto)

    enqueueSnackbar('Produto removido do carrinho com sucesso!', {
      variant: 'success',
      autoHideDuration: 2000
    })
  }

  return <div className="w-full px-10">
    <div className="grid grid-cols-1 gap-3 w-fit">
      {items.length > 0 && items.map((item) => <CartItem item={item} key={`${item.produto.descricao}-${item.quantidade}`} onRemove={handleRemove} />)}
      {items.length === 0 && <div>Carrinho vazio</div>}
    </div>
    <Card className="h-32 w-72 absolute right-10 top-1/3">
      <CardBody>
        <div className="h-full flex flex-col justify-around">
           <span className="flex flex-col w-full items-center justify-center">
            Valor Total do Pedido: {brlMoney(sumArray(items.map((item) => item.produto.valor * item.quantidade)))}
            <Divider className="w-full bg-black" />
          </span>
          <Button
            color="default"
            onClick={() => handleSubmit()}
            isLoading={isLoading}
          >
            Finalizar venda
          </Button>
        </div>
      </CardBody>
      </Card>  
    </div>
}