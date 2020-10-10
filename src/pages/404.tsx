import { MainLayout } from 'layouts/MainLayout';
import Link from 'next/link';
import { CustomPageWithoutProps } from 'types/Page';

const Custom404: CustomPageWithoutProps = () => {
  return (
    <div>
      <div>Not found</div>
      <div>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
};

Custom404.Layout = MainLayout;

export default Custom404;
