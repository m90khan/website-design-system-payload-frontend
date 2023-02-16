import React from 'react';
import { GetStaticProps } from 'next';
import Head from '../components/Head';
import Template from '../components/layout/Template';
import useStyles from '../css/pages/studies';

import GridContainer from '../components/layout/GridContainer';
import StudyPreview from '../components/studies/StudyPreview';
import { StudyPageType } from '@/lib/types/page';
import { FooterType, SocialMediaType } from '@/lib/types/common';
import allStudiesData from '../content/studies/all.json';
export type Props = {
  studies: StudyPageType[];
  statusCode: number;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Studies: React.FC<Props> = (props) => {
  const { footer, socialMedia, studies } = props;
  const classes = useStyles();

  let previewTemplate = 0;

  return (
    <Template className={classes.studies} footer={footer} socialMedia={socialMedia}>
      <Head
        title='Studies'
        description='Find case studies, blog posts, and more, all related to architecture and construction, here.'
        keywords='engineering, construction, architecture, design build'
      />
      <GridContainer>
        <header>
          <h1 className={classes.title}>Studies</h1>
        </header>
      </GridContainer>
      {studies.map((study, i) => {
        if (previewTemplate === 0) {
          previewTemplate = 1;
        } else if (previewTemplate === 1) {
          previewTemplate = 2;
        } else if (previewTemplate === 2) {
          previewTemplate = 3;
        } else if (previewTemplate === 3) {
          previewTemplate = 1;
        }

        return (
          <StudyPreview
            first={i === 0}
            last={i === studies.length - 1}
            key={i}
            study={study}
            template={previewTemplate}
          />
        );
      })}
    </Template>
  );
};

export default Studies;
export async function getServerSideProps(ctx) {
  return {
    props: { studies: allStudiesData }, // will be passed to the page component as props
  };
}
// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const page = ctx.params?.page || 1;

//   const studiesReq = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/studies?page=${page}`
//   );
//   const studiesData = await studiesReq.json();

//   return {
//     props: {
//       studies: studiesData.docs,
//     },
//     revalidate: 1,
//   };
// };
