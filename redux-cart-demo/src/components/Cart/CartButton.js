import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/uiReducer';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const CartQty = useSelector(state=>state.cart.cartQty);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{CartQty}</span>
    </button>
  );
};

export default CartButton;
