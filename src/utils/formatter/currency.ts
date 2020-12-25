/* eslint-disable */

export const numberToMoney = (number = 0, currency = 'Rp.') => {
  return `${currency} ${number
    .toLocaleString()
    .replace(/,/g, '.')}`
}

export const moneyToNumber = (money = '0', currency = 'Rp.') => {
  money = money.toString().replace(currency, '').replace(/\./g, '').trim()
  if (money === '') return 0
  return parseInt(money, 10)
}

export const inputMoney = (money: string): string => {
  const number = moneyToNumber(money)
  return numberToMoney(number)
}
