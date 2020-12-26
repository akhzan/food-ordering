import React, { ReactNode } from 'react'
import { Badge, Col, Row } from 'antd'
import { ShoppingOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/root-reducer'
import { Link } from 'react-router-dom'
import { MENUS } from 'config/constants/menus'

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  const { carts } = useSelector((state: RootState) => state.cart)
  const totalMenusInCart = Object.keys(carts).length
  return (
    <div>
      <header className="py-6 mb-6 border-b border-gray-200">
        <Row justify="center">
          <Col span={14}>
            <div className="flex justify-between items-center">
              <Link to={MENUS.HOME} className="text-black">
                <p className="text-3xl font-bold">Mangan.</p>
              </Link>
              <Badge size="small" count={totalMenusInCart}>
                <Link to={MENUS.CART} className="text-black">
                  <ShoppingOutlined className="text-3xl" />
                </Link>
              </Badge>
            </div>
          </Col>
        </Row>
      </header>
      <Row justify="center" style={{ minHeight: 'calc(100vh - 184px)' }}>
        <Col span={14}>{children}</Col>
      </Row>
      <footer>
        <div className="mt-16 py-6 border-t border-gray-200 w-full text-center text-sm text-gray-400">
          2020 - Mangan.
        </div>
      </footer>
    </div>
  )
}

export default AppLayout
