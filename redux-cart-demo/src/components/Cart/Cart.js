import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  
  const itemsInCart = useSelector(state=>state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemsInCart.map((item, index)=>{
          return(
            <CartItem item = {item} key={index}/>
          )
        })}
      </ul>
    </Card>
  );
};

export default Cart;
