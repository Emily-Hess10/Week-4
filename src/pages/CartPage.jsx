import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart }) {
  return (
    <div className="page">
      <h2>Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={removeFromCart}
        />
      ))}
    </div>
  );
}

export default CartPage;
