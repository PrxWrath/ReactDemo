import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { showCart: false, notification:{type:'', title:'', msg: ''} },
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    notify(state,action){
      state.notification = {
        type: action.payload.type,
        title: action.payload.title,
        msg: action.payload.msg
      }
    },
    clear(state){
      state.notification = {
        type:'',
        title:'',
        msg:''
      }
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;