import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartReducer';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, price } = props.item;
  const total = useSelector(state=>state.cart.total);
  const dispatch = useDispatch();

  const increaseQtyHandler = () => {
    dispatch(cartActions.addItem(props.item));
  }

  const decreaseQtyHandler = () => {
    dispatch(cartActions.removeItem(props.item));
  }
  
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQtyHandler}>-</button>
          <button onClick={increaseQtyHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
