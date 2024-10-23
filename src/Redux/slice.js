import { createSlice } from "@reduxjs/toolkit";

const initialState = { addedToCart: 0, addedProducts: [] };
const slice=createSlice({
         name:"cart",
         initialState:initialState,
         reducers:{
                  addToCart:(state,action)=>{                          
                           if (state.addedProducts.some((product) => product.id == action.payload.id)) {
                                    state.addedProducts.map((product) => {
                               if (product.id == action.payload.id) {
                                 product.count += 1;
                                 product.totalPrice = product.count * product.price;
                               }
                             });
                           } else {
                                    state.addedProducts.push({
                               ...action.payload,
                               count: 1,
                               totalPrice: action.payload.price*action.payload.count,
                             });
                             state.addedToCart += 1;
                           }
                     
                           

                           
                  },       
                  increaseInCart:(state,action)=>{




                           
                           state.addedProducts.map((product) => {
                             if (product.id == action.payload) {
                               product.count += 1;
                               product.totalPrice = product.count * product.price;
                             }
                           });


                  },
                  decreaseInCart:(state,action)=>{

                           state.addedProducts.map((product) => {
                             if (product.id == action.payload) {
                               product.count -= 1;
                               product.totalPrice = product.count * product.price;
                             }
                           });




                  },
                  removeFromCart:(state,action)=>{


                state.addedProducts=  state.addedProducts = state.addedProducts.filter(
                             (product) => product.id !== action.payload
                           );
                          console.log(state.addedProducts);
                          
                           state.addedToCart -= 1;
                     





                  }
         }
})
export default slice.reducer
export const {addToCart,increaseInCart,decreaseInCart,removeFromCart}=slice.actions