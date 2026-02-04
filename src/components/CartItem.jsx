function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <p>{item.name} - ${item.price}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
