import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { showCart: false, notification:{type:'', title:'', msg: ''} },
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    loading(state){
      state.notification = {
        type: 'loading',
        title: 'Sending...',
        msg: 'Sending Cart Data!'
      }
    },
    error(state){
      state.notification = {
        type: 'error',
        title: 'Error!',
        msg: 'Sending Cart Data Failed!'
      }
    },
    success(state){
      state.notification = {
        type: 'success',
        title: 'Success!',
        msg: 'Sent Cart Data Successfully!'
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