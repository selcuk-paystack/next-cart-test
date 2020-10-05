import Link from 'next/link';
import { Modal } from 'components/Modal';
import { addToCart, removeFromCart } from 'contexts/cart/cartActions';
import { useCart, useDispatchCart } from 'contexts/cart/CartContext';
import { toggleCartView } from 'contexts/cartView/cartViewActions';
import {
  useCartView,
  useDispatchCartView,
} from 'contexts/cartView/CartViewContext';
import { Product } from 'types/Product';

const CartView = () => {
  const cartState = useCart();
  const cartViewState = useCartView();
  const dispatchCart = useDispatchCart();
  const dispatchCartView = useDispatchCartView();

  const toggle = () => {
    dispatchCartView(toggleCartView());
  };

  const Header = () => {
    return (
      <>
        <p className="modal-card-title">Cart</p>
        <button className="delete" aria-label="close" onClick={toggle}></button>
      </>
    );
  };

  const Content = () => {
    const { cartItems } = cartState;

    if (!cartItems.length) {
      return <p>Cart is empty. Please add products.</p>;
    }

    const increaseProductCount = (product: Product) => {
      dispatchCart(addToCart(product));
    };

    const decreaseProductCount = (product: Product) => {
      dispatchCart(removeFromCart(product));
    };

    return cartItems.map(cartItem => (
      <div key={cartItem.id} className="is-flex">
        <p>
          <span>{cartItem.product.name}</span> x<span>{cartItem.count}</span>
        </p>
        <button
          type="button"
          onClick={() => decreaseProductCount(cartItem.product)}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => increaseProductCount(cartItem.product)}
        >
          +
        </button>
      </div>
    ));
  };

  const Footer = () => {
    const { cartItems } = cartState;

    return (
      <>
        {cartItems.length > 0 && (
          <Link href="/checkout">
            <button className="button is-success" onClick={toggle}>
              Checkout
            </button>
          </Link>
        )}
        <button className="button" onClick={toggle}>
          Close
        </button>
      </>
    );
  };

  return (
    <Modal
      title="Cart"
      visible={cartViewState.cartViewVisible}
      onClose={toggle}
      header={Header()}
      content={Content()}
      footer={Footer()}
    />
  );
};

export { CartView };
