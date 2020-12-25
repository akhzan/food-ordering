import React from 'react'
import AppLayout from 'components/layout'
import { Button, Card, Carousel, Col, Row } from 'antd'
import { bowlIcon, burgerIcon, cakeIcon, drinkIcon } from 'assets/images'
import { RightCircleFilled, PlusOutlined } from '@ant-design/icons'
import { PRIMARY } from 'config/constants/colors'

const Home = () => {
  const categories = [
    { icon: burgerIcon, title: 'Burgers', type: 'burgers' },
    { icon: bowlIcon, title: 'Rice Bowls', type: 'bowls' },
    { icon: cakeIcon, title: 'Sweets', type: 'sweets' },
    { icon: drinkIcon, title: 'Drinks', type: 'drinks' },
  ]
  return (
    <AppLayout>
      <Carousel autoplay className="mb-12 app-banner">
        <div>
          <img
            src="https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2020/12/22/cdf85713-c6c6-4d82-9df5-1c820339d6c5.jpg.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div>
          <img
            src="https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2020/12/23/ecf31df4-adad-44aa-a574-983187cafb50.jpg.webp"
            alt=""
            className="w-full"
          />
        </div>
      </Carousel>
      <div className="mt-12 mb-8">
        <p className="text-2xl font-bold mb-4">Categories</p>
        <Carousel slidesPerRow={4} arrows className="-mx-2" dots={false}>
          {categories.map((category) => (
            <div key={category.type} className="p-2">
              <Card className="app-category__card rounded-lg" hoverable>
                <div className="flex justify-center items-center flex-col text-center py-6">
                  <img src={category.icon} alt="" style={{ width: '30px' }} />
                  <p className="my-6">{category.title}</p>
                  <RightCircleFilled
                    style={{ color: PRIMARY }}
                    className="text-2xl"
                  />
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-bold mb-4">Popular</p>
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
              <p className="mb-4 font-bold">Beach BBQ Burger</p>
              <Button size="small" type="primary" icon={<PlusOutlined />}>
                Add to cart
              </Button>
            </Card>
          </Col>
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
      </div>
    </AppLayout>
  )
}

export default Home
