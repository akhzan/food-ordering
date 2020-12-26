import React, { useEffect } from 'react'
import AppRouter from 'components/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'redux/data'
import { updateCartFromStorage } from 'redux/cart'
import { RootState } from 'redux/root-reducer'

const App = () => {
  const storageConfig = 'cartMangan'
  const dispatch = useDispatch()
  const { carts, firstLoad } = useSelector((state: RootState) => state.cart)
  useEffect(() => {
    if (!firstLoad) localStorage.setItem(storageConfig, JSON.stringify(carts))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carts])
  useEffect(() => {
    const cartFromStorage = JSON.parse(
      localStorage.getItem(storageConfig) || '{}',
    )
    dispatch(updateCartFromStorage(cartFromStorage))
    dispatch(fetchData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <AppRouter />
}

export default App
