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

export default Custom404;
