import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiGetData } from 'api/data'
import { Category } from 'models/category'
import { Menu } from 'models/menu'
import { Promo } from 'models/promo'
import { arrayToObject } from 'utils/data-manipulation'

import { AppThunk } from './store'

interface DataState {
  loading?: boolean
  categories: { [key: string]: Category }
  menus: { [key: string]: Menu }
  promo: Promo[]
  populars: Menu[]
}

const initialState: DataState = {
  loading: false,
  categories: {},
  menus: {},
  promo: [],
  populars: [],
}

const dataSlice = createSlice({
  name: 'DATA',
  initialState,
  reducers: {
    getDataStart: (state) => ({ ...state, loading: true }),
    getDataSuccess: (state, { payload }: PayloadAction<DataState>) => ({
      ...state,
      ...payload,
      loading: false,
    }),
    getDataFailed: (state) => ({ ...state, loading: false }),
  },
})

export const { getDataStart, getDataSuccess, getDataFailed } = dataSlice.actions

export default dataSlice.reducer

export const fetchData = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getDataStart())
    const data = await apiGetData()
    const flatCategories = arrayToObject(data.categories)
    const flatMenus = arrayToObject(data.menus)
    let populars: Menu[] = []
    data.menus.map((menu) => {
      flatCategories[menu.category].menus = [
        ...(flatCategories[menu.category].menus || []),
        menu.id,
      ]
      populars = menu.isPopular ? [...populars, menu] : populars
      return menu
    })
    const processedData = {
      categories: flatCategories,
      menus: flatMenus,
      promo: data.promo,
      populars,
    }
    dispatch(getDataSuccess(processedData))
  } catch (err) {
    dispatch(getDataFailed())
  }
}
