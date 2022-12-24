import {createSlice} from '@reduxjs/toolkit';

const initialState = { items:[], cartQty:0 }
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state, action){
            const existing = state.items.find(item=>item.title===action.payload.title)
            if(!existing){
                state.items.push({
                    title: action.payload.title,
                    price: action.payload.price,
                    total: action.payload.price,
                    quantity: action.payload.quantity,
                })
            }else{
                existing.quantity+=1;
                existing.total+=action.payload.price
            }
            state.cartQty += 1;
        },
        removeItem(state, action){
            if(action.payload.quantity===1){
                state.items = [...state.items.filter(item=>item.title!==action.payload.title)]
            }else{
                const existing = state.items.find(item=>item.title===action.payload.title)      
                existing.quantity-=1;
                existing.total-=action.payload.price;
            }
            state.cartQty -= 1;
        },

        toggleCart(state){
            state.showCart = !state.showCart;
        }

    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;