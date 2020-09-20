import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import { productsApi } from 'services/http/ProductsApi';
import { Product } from 'types/Product';
import { ApiResponse } from 'types/Http';

export default function Home(props: ApiResponse<Product>) {
  return (
    <Layout>
      <p>INDEX</p>
    </Layout>
  );
}
