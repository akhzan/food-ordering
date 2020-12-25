import React, { ReactNode } from 'react'
import { Badge, Col, Row } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <header className="py-6 mb-6 border-b border-gray-200">
        <Row justify="center">
          <Col span={14}>
            <div className="flex justify-between items-center">
              <p className="text-3xl font-bold">Mangan.</p>
              <Badge size="small" count={5}>
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
