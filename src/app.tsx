import React, { useEffect } from 'react'
import AppRouter from 'components/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/root-reducer'
import { fetchData } from 'redux/data'

const App = () => {
  const dispatch = useDispatch()
  const { menus } = useSelector((state: RootState) => state.data)
  console.log(menus)
  useEffect(() => {
    dispatch(fetchData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <AppRouter />
}

export default App
