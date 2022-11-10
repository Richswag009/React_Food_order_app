import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Suschi", amount: 2, price: 12.99 }].map(
        (item, i) => (
          <li key={i}> {item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>34.44</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
