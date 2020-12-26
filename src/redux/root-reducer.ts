import { combineReducers } from '@reduxjs/toolkit'
import data from 'redux/data'
import cart from 'redux/cart'

const rootReducer = combineReducers({ data, cart })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
