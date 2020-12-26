import React from 'react'
import { FrownOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import AppLayout from 'components/layout'
import { MENUS } from 'config/constants/menus'

const NotFoundPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col justify-center py-16 text-center h-full">
        <FrownOutlined className="text-6xl" />
        <p className="font-bold text-2xl my-10">Sorry, nothing to do here.</p>
        <div>
          <Button size="small" type="primary">
            <Link to={MENUS.HOME}>Back to home</Link>
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}

export default NotFoundPage
