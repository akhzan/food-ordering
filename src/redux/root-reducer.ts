import { combineReducers } from '@reduxjs/toolkit'
import data from 'redux/data'

const rootReducer = combineReducers({ data })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
