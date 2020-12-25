import React from 'react'
import { Button, Card, Col, Row, Tabs } from 'antd'
import AppLayout from 'components/layout'
import { PlusOutlined } from '@ant-design/icons'

const Menus = () => {
  return (
    <AppLayout>
      <Tabs defaultActiveKey="1" onChange={() => {}}>
        <Tabs.TabPane tab="Burgers" key="1">
          <Row gutter={14}>
            <Col span={6}>
              <Card
                cover={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
                  />
                }
              >
                <p className="mb-2 font-bold">Burger</p>
                <p className="mb-4 text-gray-400">
                  Rice, sliced beef, egg, and truffle oil.
                </p>
                <div className="flex justify-between items-center">
                  <p>Rp. 65.000</p>
                  <Button size="small" type="primary" icon={<PlusOutlined />} />
                </div>
              </Card>
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Rice Bowls" key="2">
          <Row gutter={14}>
            <Col span={6}>
              <Card
                cover={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
                  />
                }
              >
                <p className="mb-2 font-bold">Truffle Gyudon</p>
                <p className="mb-4 text-gray-400">
                  Rice, sliced beef, egg, and truffle oil.
                </p>
                <div className="flex justify-between items-center">
                  <p>Rp. 65.000</p>
                  <Button size="small" type="primary" icon={<PlusOutlined />} />
                </div>
              </Card>
            </Col>
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </AppLayout>
  )
}

export default Menus
