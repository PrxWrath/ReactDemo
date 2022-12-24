import {createSlice} from '@reduxjs/toolkit';

const initialState = { items:[], total:0, showCart:false }
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state, action){
            if(!state.items.filter(item=>item.title===action.payload.title).length){
                state.items = [action.payload, ...state.items];
            }else{
                state.items.forEach(item=>{
                    if(item.title===action.payload.title){
                        item.quantity+=1;
                    }
                })
            }
            state.total += action.payload.price;
        },
        removeItem(state, action){
            if(action.payload.quantity===1){
                state.items = [...state.items.filter(item=>item.title!==action.payload.title)]
            }else{
                state.items.forEach(item=>{
                    if(item.title===action.payload.title){
                        item.quantity-=1;
                    }
                })
            }
            state.total -= action.payload.price;
        },

        toggleCart(state){
            state.showCart = !state.showCart;
        }

    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;