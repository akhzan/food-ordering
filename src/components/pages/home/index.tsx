import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Carousel, Col, Row, Skeleton } from 'antd'
import { useSelector } from 'react-redux'
import { RightCircleFilled } from '@ant-design/icons'
import AppLayout from 'components/layout'
import { PRIMARY } from 'config/constants/colors'
import { RootState } from 'redux/root-reducer'
import { MENUS } from 'config/constants/menus'
import MenuItem from 'components/common/menu'

const Home = () => {
  const history = useHistory()
  const { categories, loading, populars, promo } = useSelector(
    (state: RootState) => state.data,
  )
  const clickCategory = (category: string) => {
    history.push(`${MENUS.MENUS}?category=${category}`)
  }
  return (
    <AppLayout>
      {loading && <Skeleton active />}
      <Carousel autoplay className="mb-12 app-banner">
        {promo.map((pr) => (
          <div key={pr.id}>
            <img src={pr.banner} alt="" className="w-full" />
          </div>
        ))}
      </Carousel>
      <div className="mt-12 mb-8">
        <p className="text-2xl font-bold mb-4">Categories</p>
        {loading && <Skeleton active />}
        <Row gutter={14}>
          {Object.values(categories).map((category) => (
            <Col xs={12} sm={6} key={category.id} className="p-2">
              <Card
                hoverable
                className="app-category__card rounded-lg"
                onClick={() => clickCategory(category.id)}
              >
                <div className="flex justify-center items-center flex-col text-center py-6">
                  <img src={category.icon} alt="" style={{ width: '30px' }} />
                  <p className="my-6">{category.title}</p>
                  <RightCircleFilled
                    style={{ color: PRIMARY }}
                    className="text-2xl"
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-bold mb-4">Popular</p>
        <Row gutter={14}>
          {populars.map((popular) => (
            <Col xs={12} sm={6} key={popular.id}>
              <MenuItem menu={popular} />
            </Col>
          ))}
        </Row>
      </div>
    </AppLayout>
  )
}

export default Home
