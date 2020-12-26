import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cart } from 'models/cart'

interface CartState {
  carts: { [key: string]: Cart }
}

const initialState: CartState = {
  carts: {},
}

const cartSlice = createSlice({
  name: 'CART',
  initialState,
  reducers: {
    addToCart: (state, { payload: menuId }: PayloadAction<string>) => ({
      ...state,
      carts: {
        ...state.carts,
        [menuId]: { menuId, qty: (state.carts[menuId] || { qty: 0 }).qty + 1 },
      },
    }),
    changeItemQty: (state, { payload }: PayloadAction<Cart>) => {
      let carts = { ...state.carts } as any
      if (payload.qty <= 0) {
        delete carts[payload.menuId]
      } else {
        carts = { ...carts, [payload.menuId]: payload }
      }
      return { ...state, carts }
    },
  },
})

export const { addToCart, changeItemQty } = cartSlice.actions

export default cartSlice.reducer
