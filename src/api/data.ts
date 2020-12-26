import { METHODS } from 'api/methods'
import { call } from 'api/axios'
import { Category } from 'models/category'
import { Menu } from 'models/menu'
import { Promo } from 'models/promo'

interface DataResponse {
  categories: Category[]
  menus: Menu[]
  promo: Promo[]
}

export const apiGetData = async (): Promise<DataResponse> => {
  const response = await call(METHODS.GET, '/api/data')
  return response.data
}
