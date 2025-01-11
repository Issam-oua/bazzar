import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items:[],
}
const bazarslice = createSlice({
    name:'bazar',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            const { productId, name, slug, price, image, quntity } = action.payload;
            const ID = state.items.findIndex(item => item.productId === productId);
            if (ID >= 0) {
                state.items[ID].quntity += quntity;             
            } else {
                state.items.push({ productId,slug, name, price, image, quntity });
            }
        },
        
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.productId !== action.payload);
          },
          updatequntity: (state, action) => {
            const { productId, increment } = action.payload;
            const exists = state.items.find(item => item.productId === productId);
            if (exists) {
              exists.quntity += increment;
              if (exists.quntity <= 0) {
                state.items = state.items.filter(item => item.productId !== productId);
              }
            }
          }
    }
})
export const {addTocart,deleteProduct,removeFromCart,updatequntity} = bazarslice.actions;
export default bazarslice.reducer;