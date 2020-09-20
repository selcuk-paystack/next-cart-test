import Modal from 'components/Modal/Modal';
import { useCart } from 'contexts/cart/CartContext';
import { toggleCartView } from 'contexts/cartView/cartViewActions';
import {
  useCartView,
  useDispatchCartView,
} from 'contexts/cartView/CartViewContext';

const CartView = () => {
  const cartState = useCart();
  const cartViewState = useCartView();
  const dispatchCartView = useDispatchCartView();
  const toggle = () => {
    dispatchCartView(toggleCartView());
  };

  const cartView = () => {
    const { cartItems } = cartState;

    if (!cartItems.length) {
      return null;
    }

    // TODO: Modal'ı Navbar'dan ayır, CartView diye bir componente taşı. CartView içerisinde item quantity, shipping ve diğer işlemleri göster

    /* const reduced = cartItems.reduce((prev, next) => {}, {}); */

    return cartItems.map((cartItem, index) => (
      <p key={index}>{cartItem.name}</p>
    ));
  };

  return (
    <Modal
      title="Cart"
      visible={cartViewState.cartViewVisible}
      onClose={toggle}
      children={cartView()}
    />
  );
};

export default CartView;
