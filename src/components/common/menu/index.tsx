import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import { Menu } from 'models/menu'
import { numberToMoney } from 'utils/formatter/currency'

interface Props {
  menu: Menu
}

const MenuItem = ({ menu }: Props) => {
  return (
    <Card cover={<img alt="" src={menu.img} />}>
      <p className="mb-2 font-bold">{menu.name}</p>
      <p className="mb-4 text-gray-400">{menu.desc}</p>
      <div className="flex justify-between items-center">
        <p>{numberToMoney(menu.price)}</p>
        <Button size="small" type="primary" icon={<PlusOutlined />} />
      </div>
    </Card>
  )
}

export default MenuItem
