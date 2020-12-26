import React from 'react'
import { Badge, Button, Card, Col, Modal, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import AppLayout from 'components/layout'
import { RootState } from 'redux/root-reducer'
import {
  DeleteFilled,
  MinusCircleFilled,
  PlusCircleFilled,
  ShoppingOutlined,
} from '@ant-design/icons'
import { numberToMoney } from 'utils/formatter/currency'
import { GRAY, PRIMARY } from 'config/constants/colors'
import { changeItemQty, clearCart } from 'redux/cart'
import { MENUS } from 'config/constants/menus'

const CartPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { menus } = useSelector((state: RootState) => state.data)
  const { carts } = useSelector((state: RootState) => state.cart)
  const clickOrder = () => {
    Modal.success({
      onOk: () => history.push(MENUS.HOME),
      okText: 'Back to home',
      title: 'Order Success',
      content: 'Yay! Thank you for ordering foods with us.',
    })
    dispatch(clearCart())
  }
  const total = Object.values(carts).reduce((prev, curr) => {
    const menu = menus[curr.menuId] || {}
    return prev + curr.qty * menu.price
  }, 0)
  const isCartEmpty = Object.keys(carts).length <= 0
  const emptyCart = (
    <div className="flex flex-col justify-center py-16 text-center h-full">
      <ShoppingOutlined className="text-6xl" />
      <p className="font-bold text-2xl mt-10 mb-4">
        Your shopping bag is empty.
      </p>
      <p>Add menu to your shopping bag to enjoy our delicious food.</p>
      <div className="mt-12">
        <Button size="small" type="primary">
          <Link to={MENUS.MENUS}>Browse our awesome menus</Link>
        </Button>
      </div>
    </div>
  )
  const cart = (
    <Row gutter={[20, 8]}>
      <Col xs={24} sm={15}>
        <div>
          {Object.values(carts).map((cart) => {
            const menu = menus[cart.menuId] || {}
            return (
              <Row
                key={cart.menuId}
                align="middle"
                justify="space-between"
                className="py-6 border-b-4 border-gray-200"
              >
                <Col>
                  <div className="flex justify-center items-center">
                    <img
                      src={menu.img}
                      alt=""
                      style={{ height: '50px' }}
                      className="mr-6"
                    />
                    <div>
                      <p className="font-bold mb-1">{menu.name}</p>
                      <p>{numberToMoney(menu.price)}</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Button
                    shape="circle"
                    type="text"
                    icon={<DeleteFilled className="text-lg text-gray-300" />}
                    onClick={() => dispatch(changeItemQty({ ...cart, qty: 0 }))}
                  />
                  <Button
                    shape="circle"
                    type="text"
                    icon={<MinusCircleFilled className="text-lg" />}
                    style={{ color: cart.qty <= 1 ? GRAY : PRIMARY }}
                    disabled={cart.qty <= 1}
                    onClick={() =>
                      dispatch(changeItemQty({ ...cart, qty: cart.qty - 1 }))
                    }
                  />
                  <Badge
                    count={cart.qty}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  />
                  <Button
                    shape="circle"
                    type="text"
                    icon={<PlusCircleFilled className="text-lg" />}
                    style={{ color: PRIMARY }}
                    onClick={() =>
                      dispatch(changeItemQty({ ...cart, qty: cart.qty + 1 }))
                    }
                  />
                </Col>
              </Row>
            )
          })}
        </div>
      </Col>
      <Col xs={24} sm={9}>
        <Card>
          <p className="font-bold mb-4">Summary</p>
          <div className="flex justify-between align-middle">
            <p>Total</p>
            <p className="font-bold">{numberToMoney(total)}</p>
          </div>
          <Button
            onClick={clickOrder}
            size="small"
            type="primary"
            className="w-full mt-8"
          >
            Order
          </Button>
        </Card>
      </Col>
    </Row>
  )
  return <AppLayout>{isCartEmpty ? emptyCart : cart}</AppLayout>
}

export default CartPage
