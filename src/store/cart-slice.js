import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        changed: false,
    },
    reducers: {
        replaceData(state, action) {
            state.totalQuantity = action.payload.totalPrice;
            state.itemsList = action.payload.itemsList
        },
        addToCart(state, action){
            state.changed = true;
            const newItem = action.payload;
            const existItem = state.itemsList.find((item) => item.id === newItem.id)
            console.log(newItem)

            if(existItem){
                existItem.quantity++;
                existItem.totlaPrice+= newItem.price;
            } else{
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    img: newItem.imgURL
                });
            }
            state.totalQuantity++
        },
        removeFromCart(state, action) {
            state.changed = true;
            const id = action.payload;

            const existItem = state.itemsList.find((item) => item.id === id);
            if(existItem.quantity === 1){
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQuantity--
            }
            else{
                existItem.quantity--;
                existItem.totalPrice -= existItem.price
            }
        },
        setShowCart(state){
            state.showCart = !state.showCart
        }
    }
})

export const cartActions = cartSlice.actions