import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { cartActions } from './store/cartReducer';
import { uiActions } from './store/uiReducer';

function App() {
  const showCart = useSelector(state=>state.ui.showCart);
  const notif = useSelector(state=>state.ui.notification);
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    async function updateCart(){
      if(cart.items.length){
        try{
          dispatch(uiActions.notify({type:'loading', title:'Sending...', msg:'Sending Data!'}));
          let res = await fetch('https://react-http-demo-b17c2-default-rtdb.firebaseio.com/cart.json',{
            method:'PUT',
            body:JSON.stringify(cart),
            headers:{
              'Content-Type':'application/json'
            }
          })
          if(res.ok){
            dispatch(uiActions.notify({type:'success', title:'Success!', msg:'Sent Data Successfully!'}));
          }else{
            throw new Error('failed');
          }
        }catch(err){
          dispatch(uiActions.notify({type:'error', title:'Error!', msg:'Sending Data Failed!'}));
        }
        setTimeout(()=>{dispatch(uiActions.clear())}, 2000);
      }
    }
    if(!cart.loaded){
      updateCart();
    }
  }, [cart, dispatch]);
  

  useEffect(()=>{
    async function loadCart(){
      try{
        dispatch(uiActions.notify({type:'loading', title:'Loading...', msg:'Loading Data!'}));
        let res = await fetch('https://react-http-demo-b17c2-default-rtdb.firebaseio.com/cart.json')
        let data = await res.json();
        if(res.ok){
          dispatch(uiActions.notify({type:'success', title:'Success!', msg:'Loaded Data Successfully!'}))
          dispatch(cartActions.load({cartQty:data.cartQty, items:Object.values(data.items)}));
        }else{
          throw new Error('failed');
        }
      }catch(err){
        dispatch(uiActions.notify({type:'error', title:'Error!', msg:'Loading Data Failed!'}));
      }
      setTimeout(()=>{dispatch(uiActions.clear())}, 2000);
    }
    loadCart();
  },[dispatch])

  return (
    <>
      {notif.type&&<Notification type={notif.type} title={notif.title} message={notif.msg}/>} 
      <Layout>
        {showCart&&<Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
