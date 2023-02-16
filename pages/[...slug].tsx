import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from '../components/Head';
import RenderBlocks from '../components/RenderBlocks';
import Template from '../components/layout/Template';
import PageHero from '../components/layout/PageHero';
import useStyles from '../css/pages/[...slug]';
import { PageType } from '@/lib/types/page';
import { FooterType, SocialMediaType } from '@/lib/types/common';
import NotFound from '@/components/NotFound';
import homeData from '../content/pages/home.json';
import whoData from '../content/pages/who.json';
import approachData from '../content/pages/approach.json';

export type Props = {
  page?: PageType;
  statusCode: number;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Page: React.FC<Props> = (props) => {
  const { page, footer, socialMedia } = props;
  const classes = useStyles();

  if (!page) {
    return <NotFound />;
  }

  return (
    <Template className={classes.page} footer={footer} socialMedia={socialMedia}>
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <PageHero
        title={page.title}
        type={page.heroType}
        content={page.heroContent}
        media={page.heroMedia}
      />
      <RenderBlocks layout={page.layout} />
    </Template>
  );
};
// test
export default Page;
export async function getServerSideProps(ctx) {
  const slug = ctx.params?.slug ? ctx.params?.slug[0] : 'home';
  let page = {};
  if (slug === 'home') {
    page = homeData;
  } else if (slug === 'our-approach') {
    page = approachData;
  } else if (slug === 'who-we-are') {
    page = whoData;
  }
  return {
    props: { page: page }, // will be passed to the page component as props
  };
}
// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const slug = ctx.params?.slug || 'home';
//   console.log('sluf', ctx.params?.slug);

//   const pageReq = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`
//   );
//   const pageData = await pageReq.json();

//   return {
//     props: {
//       page: pageData.docs[0],
//     },
//     revalidate: 1,
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const pageReq = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?limit=100`
//   );
//   const pageData = await pageReq.json();

//   return {
//     paths: pageData.docs.map(({ slug }) => ({
//       params: { slug: slug.split('/') },
//     })),
//     fallback: false,
//   };
// };
