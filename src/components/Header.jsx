import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
}

export default Header;
