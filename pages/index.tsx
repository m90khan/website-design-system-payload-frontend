import { GetServerSideProps } from 'next';
import Page, { getServerSideProps as sharedGetStaticProps } from './[...slug]';

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const func = sharedGetStaticProps.bind(this);
  return func(ctx);
};
