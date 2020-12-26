import React, { ReactNode } from 'react'
import { Badge, Col, Row } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/root-reducer'

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  const { carts } = useSelector((state: RootState) => state.cart)
  console.log(carts)
  const totalMenusInCart = Object.keys(carts).length
  return (
    <div>
      <header className="py-6 mb-6 border-b border-gray-200">
        <Row justify="center">
          <Col span={14}>
            <div className="flex justify-between items-center">
              <p className="text-3xl font-bold">Mangan.</p>
              <Badge size="small" count={totalMenusInCart}>
                <ShoppingCartOutlined className="text-3xl" />
              </Badge>
            </div>
          </Col>
        </Row>
      </header>
      <Row justify="center">
        <Col span={14}>
          <div>{children}</div>
        </Col>
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
