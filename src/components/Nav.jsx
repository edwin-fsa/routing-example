// we use <Link> components instead of <a> tags
import { Link } from 'react-router-dom';
export const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/cart">Shopping Cart</Link>
      </li>
    </ul>
  </nav>
);

