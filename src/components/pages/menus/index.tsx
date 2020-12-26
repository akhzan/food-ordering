import React from 'react'
import { Col, Row, Skeleton, Tabs } from 'antd'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import AppLayout from 'components/layout'
import { RootState } from 'redux/root-reducer'
import MenuItem from 'components/common/menu'
import { MENUS } from 'config/constants/menus'

const MenuPage = () => {
  const history = useHistory()
  const location = useLocation()
  const queryFromLocSearch = new URLSearchParams(location.search)
  const activeKey = queryFromLocSearch.get('category') || 'burgers'
  const { categories, loading, menus } = useSelector(
    (state: RootState) => state.data,
  )
  const changeTab = (category: string) => {
    history.push(`${MENUS.MENUS}?category=${category}`)
  }
  return (
    <AppLayout>
      {loading && <Skeleton active />}
      <Tabs activeKey={activeKey} onChange={changeTab}>
        {Object.values(categories).map((category) => (
          <Tabs.TabPane tab={category.title} key={category.id}>
            <Row gutter={[14, 14]}>
              {(category.menus || []).map((menu) => (
                <Col span={12} key={menu}>
                  <MenuItem menu={menus[menu]} />
                </Col>
              ))}
            </Row>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </AppLayout>
  )
}

export default MenuPage
