import { MainLayout } from 'layouts/MainLayout';
import { NextPage } from 'next';
import Link from 'next/link';
import { CustomPageWithoutProps } from 'types/Page';

const Custom500: CustomPageWithoutProps = () => {
  return (
    <div>
      <div>An error occurred. Please try again later.</div>
      <div>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
};

Custom500.Layout = MainLayout;

export default Custom500;
