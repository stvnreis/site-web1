export function brlMoney(money?: number) {
  return money ? `R$ ${money.toFixed(2)}` : 'R$ 0.00'
}