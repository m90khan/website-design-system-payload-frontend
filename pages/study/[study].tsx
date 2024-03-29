/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Cell, Grid } from '@faceless-ui/css-grid';
import Link from 'next/link';
import Head from '../../components/Head';
import Template from '../../components/layout/Template';
import useStyles from '../../css/pages/study';

import GridContainer from '../../components/layout/GridContainer';
import RenderBlocks from '../../components/RenderBlocks';
import Media from '../../components/Media';
import Gutter from '../../components/layout/Gutter';
import { AbsoluteNoise } from '../../components/Noise/AbsoluteNoise';
import { StudyPageType } from '@/lib/types/page';
import { FooterType, SocialMediaType } from '@/lib/types/common';
import firstData from '../../content/studies/first.json';
import secondData from '../../content/studies/second.json';
import thirdData from '../../content/studies/third.json';

export type Props = {
  study: StudyPageType;
  statusCode: number;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Study: React.FC<Props> = (props) => {
  const { footer, socialMedia, study } = props;
  const classes = useStyles();
  return (
    <Template className={classes.studies} footer={footer} socialMedia={socialMedia}>
      <Head
        title={study.meta?.title || study.title}
        description={study.meta?.description}
        keywords={study.meta?.keywords}
      />
      <GridContainer>
        <header className={classes.header}>
          <div className={classes.label}>
            <Link href='/studies' className={classes.label}>
              Study
            </Link>
          </div>
          <h1 className={classes.title}>{study.title}</h1>
        </header>
      </GridContainer>
      <div className={classes.featuredMediaWrap}>
        <Gutter right className={classes.featuredMediaGutter}>
          <Media
            {...study.featuredMedia}
            preferredSize='feature'
            className={classes.featuredMedia}
          />
        </Gutter>
        {(study?.client || study?.location || study?.categories) && (
          <GridContainer>
            <Grid htmlElement='ul' className={classes.meta}>
              {study?.client && (
                <Cell htmlElement='li' cols={3} start={2}>
                  <div className={classes.metaLabel}>Client</div>
                  <div>{study.client}</div>
                </Cell>
              )}
              {study?.categories?.length > 0 && (
                <Cell htmlElement='li' cols={3}>
                  <div className={classes.metaLabel}>Categories</div>
                  <div>
                    {study.categories.map((category, i) => (
                      <span key={i}>
                        {category.title}
                        {i !== study.categories.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                </Cell>
              )}
              {study?.location && (
                <Cell htmlElement='li' cols={3} startM={2}>
                  <div className={classes.metaLabel}>Location</div>
                  <div>{study.location}</div>
                </Cell>
              )}

              <AbsoluteNoise className={classes.backgroundNoise} />
            </Grid>
          </GridContainer>
        )}
      </div>
      <RenderBlocks layout={study.layout} />
    </Template>
  );
};

export default Study;
// second-project-title-here
// first-project-title-here
// third-project-title-here
export async function getServerSideProps(ctx) {
  const slug = ctx.params?.study && ctx.params?.study;
  let study = {};
  if (slug === 'first-project-title-here') {
    study = firstData;
  } else if (slug === 'second-project-title-here') {
    study = secondData;
  } else if (slug === 'third-project-title-here') {
    study = thirdData;
  }
  return {
    props: { study: study }, // will be passed to the page component as props
  };
}
// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const slug = ctx.params?.study;
//   console.log('study slug', slug);
//   const studyReq = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/studies?where[slug][equals]=${slug}`
//   );
//   const studyData = await studyReq.json();

//   return {
//     props: {
//       study: studyData.docs[0],
//     },
//     revalidate: 1,
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const studyReq = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/studies?limit=100`
//   );
//   const studyData = await studyReq.json();

//   return {
//     paths: studyData.docs.map(({ slug }) => ({
//       params: { study: slug },
//     })),
//     fallback: false,
//   };
// };
