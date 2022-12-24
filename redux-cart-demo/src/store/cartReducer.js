import {createSlice} from '@reduxjs/toolkit';

const initialState = { items:[], cartQty:0, loaded:true }
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
            state.loaded = false;
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
            state.loaded = false;
        },
        load(state,action){
            state.loaded = true;
            state.cartQty = action.payload.cartQty;
            state.items = action.payload.items;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;