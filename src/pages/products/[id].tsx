import React from 'react';
import { MainLayout } from 'layouts/MainLayout';
import { GetServerSideProps } from 'next';
import { productsApi } from 'services/http/ProductsApi';
import { ApiResponse } from 'types/Http';
import { Product } from 'types/Product';
import { useCart, useDispatchCart } from 'contexts/cart/CartContext';
import { addToCart } from 'contexts/cart/cartActions';
import { CustomPageWithProps } from 'types/Page';

type IndividualProductPageProps = ApiResponse<Product>;

const Products: CustomPageWithProps<IndividualProductPageProps> = (
  props: ApiResponse<Product>,
) => {
  if (props.type === 'error') {
    return (
      <>
        <p>{props.error.message}</p>
        <p>{props.error.status}</p>
      </>
    );
  }

  const cart = useCart();
  const dispatchCart = useDispatchCart();
  const { data: product } = props;

  const handleAddProduct = () => {
    dispatchCart(addToCart(product));
  };

  console.log('cart: ', cart);

  return (
    <div className="is-fluid">
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={product.media} alt={product.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{product.name}</p>
                <p className="subtitle is-6">${product.price}</p>
              </div>
            </div>
            <div className="content">
              <p>{product.description}</p>
              <div>
                <button
                  className="button is-primary"
                  onClick={handleAddProduct}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Products.Layout = MainLayout;

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const response = await productsApi.findOne({
      params: {
        id: context.params.id,
      },
    });

    return {
      props: {
        type: 'success',
        status: response.status,
        data: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        type: 'error',
        error: {
          message: error.message,
          status: error.response?.status,
        },
      },
    };
  }
};

export default Products;
