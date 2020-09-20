import CartView from 'components/CartView/CartView';
import { useCart } from 'contexts/cart/CartContext';
import { toggleCartView } from 'contexts/cartView/cartViewActions';
import { useDispatchCartView } from 'contexts/cartView/CartViewContext';
import Link from 'next/link';

const Navbar = () => {
  const cartState = useCart();
  const dispatchCartView = useDispatchCartView();

  const toggle = () => {
    dispatchCartView(toggleCartView());
  };

  return (
    <>
      <nav
        className="navbar has-background-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/products">
              <a className="navbar-item has-text-white">Products</a>
            </Link>
            <button className="button" onClick={toggle}>
              View cart{' '}
              {cartState.cartItems.length > 0 && cartState.cartItems.length}
            </button>
          </div>
        </div>
      </nav>
      <CartView />
    </>
  );
};

export default Navbar;
