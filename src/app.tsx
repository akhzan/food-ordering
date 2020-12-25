import React, { useEffect } from 'react'
import AppRouter from 'components/router'
import { useDispatch } from 'react-redux'
import { fetchData } from 'redux/data'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <AppRouter />
}

export default App
