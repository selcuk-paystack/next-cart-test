import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/Layout/Layout';
import { productsApi } from 'services/http/ProductsApi';
import { Product } from 'types/Product';
import { ApiResponse } from 'types/Http';
import { useCart } from 'contexts/cart/CartContext';

const Products = (props: ApiResponse<Product[]>) => {
  if (props.type === 'error') {
    return (
      <Layout>
        <>
          <p>{props.error.message}</p>
          <p>{props.error.status}</p>
        </>
      </Layout>
    );
  }

  const { data: products } = props;
  const cart = useCart();

  console.log(cart);

  return (
    <Layout>
      <div className="is-fluid">
        <div className="columns is-multiline">
          {products.length &&
            products.map((product, index) => (
              <Link
                key={product.id}
                href="/products/[id]"
                as={`/products/${index}`}
              >
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
                      <div className="content">{product.description}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await productsApi.find();

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
