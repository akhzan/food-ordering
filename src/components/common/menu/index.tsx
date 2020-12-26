import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'models/menu'
import { numberToMoney } from 'utils/formatter/currency'
import { addToCart } from 'redux/cart'
import { RootState } from 'redux/root-reducer'
import { PRIMARY } from 'config/constants/colors'

interface Props {
  menu: Menu
}

const MenuItem = ({ menu }: Props) => {
  const dispatch = useDispatch()
  const { carts } = useSelector((state: RootState) => state.cart)
  const clickAdd = () => {
    dispatch(addToCart(menu.id))
    message.success(
      `Successfully added menu item ${menu.name} to shopping basket`,
      1,
    )
  }
  const countInCart = (carts[menu.id] || { qty: 0 }).qty
  const countDisplay =
    countInCart > 0 ? (
      <span style={{ color: PRIMARY }} className="mr-2">
        {`${countInCart}x`}
      </span>
    ) : null
  return (
    <Card cover={<img alt="" src={menu.img} />}>
      <p className="mb-2 font-bold">
        {countDisplay}
        {menu.name}
      </p>
      <p className="mb-4 text-gray-400">{menu.desc}</p>
      <div className="flex justify-between items-center">
        <p>{numberToMoney(menu.price)}</p>
        <Button
          onClick={clickAdd}
          size="small"
          type="primary"
          icon={<PlusOutlined />}
        />
      </div>
    </Card>
  )
}

export default MenuItem
