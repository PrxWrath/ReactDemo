import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
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
          dispatch(uiActions.loading());
          let res = await fetch('https://react-http-demo-b17c2-default-rtdb.firebaseio.com/cart.json',{
            method:'PUT',
            body:JSON.stringify(cart),
            headers:{
              'Content-Type':'application/json'
            }
          })
          if(res.ok){
            dispatch(uiActions.success());
          }else{
            throw new Error('failed');
          }
          setTimeout(()=>{dispatch(uiActions.clear())}, 2000);
        }catch(err){
          dispatch(uiActions.error());
          setTimeout(()=>{dispatch(uiActions.clear())}, 2000);
        }
      }
    }
    updateCart();
  }, [cart]);

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
