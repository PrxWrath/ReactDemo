import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartReducer';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector(state=>state.cart.items);
  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCart.length}</span>
    </button>
  );
};

export default CartButton;
