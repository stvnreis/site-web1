import { TProduto } from "../types";

export const items: Partial<TProduto>[] = [
  {
    id: 1,
    descricao: 'Café com cacau',
    fotoUrl: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9',
    valor: 10.500000,
    quantidade: 10,
    categoria: 'CAFETERIA'
  },
  {
    id: 14,
    descricao: 'Bolo de chocolate',
    valor: 19.990000,
    quantidade: 10,
    categoria: 'PADARIA',
    fotoUrl: 'https://images.pexels.com/photos/19202777/pexels-photo-19202777/free-photo-of-delicious-pastry-with-chocolate.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 19,
    descricao: 'café pelé',
    valor: 12.990000,
    quantidade: 12,
    categoria: 'CAFETERIA',
    fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09aU9dTLmO-o6DJlwz7ygpkWS9VIYXOKbUfz3jVJL7T2JU9gjlbH3f-aX0lcZXQrLAf0&usqp=CAU'
  },
  {
    id: 30,
    descricao: 'Pães Personalizados Kids',
    valor: 6,
    quantidade: 19,
    categoria: 'PADARIA',
  },
  {
    id: 1,
    descricao: 'Combo 8 Toradas Sortidas',
    valor: 38.540000,
    quantidade: 25,
    categoria: 'COMBOS',
    fotoUrl: 'https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 1,
    descricao: 'Combo Desperta Sabor',
    valor: 50.000000,
    quantidade: 15,
    categoria: 'COMBOS',
    fotoUrl: 'https://images.pexels.com/photos/588776/pexels-photo-588776.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]