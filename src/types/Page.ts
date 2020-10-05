import { NextPage } from 'next';
import { AppProps } from 'next/app';

export type CustomPage = {
  Layout?: React.FC;
};
export type CustomPageWithoutProps = NextPage & CustomPage;
export type CustomPageWithProps<T = {}> = NextPage<T> & CustomPage;
export type CustomAppProps = AppProps & {
  Component: {
    Layout?: React.FC;
  };
};
