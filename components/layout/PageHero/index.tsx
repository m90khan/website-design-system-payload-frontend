// @ts-nocheck

import React from 'react';
import RichText from '../../RichText';
import ContentAboveMedia from './ContentAboveMedia';
import ContentLeftOfMedia from './ContentLeftOfMedia';
import Minimal from './Minimal';
import { ShowAfterFirstRender } from '../../ShowAfterFirstRender';
import { HeroType } from '@/lib/types/page';
import { MediaType } from '@/lib/types/layout';

type Props = {
  title: string;
  type: HeroType;
  content: unknown;
  media?: MediaType;
};

const PageHero: React.FC<Props> = ({ content, type, media, title }) => {
  if (type === 'contentAboveMedia') {
    return (
      <ShowAfterFirstRender>
        <ContentAboveMedia media={media} content={content} />
      </ShowAfterFirstRender>
    );
  }

  if (type === 'contentLeftOfMedia') {
    return (
      <ShowAfterFirstRender>
        <ContentLeftOfMedia title={title} media={media} content={content} />
      </ShowAfterFirstRender>
    );
  }

  if (type === 'minimal') {
    return (
      <ShowAfterFirstRender>
        <Minimal content={content} title={title} />
      </ShowAfterFirstRender>
    );
  }

  return (
    <div>
      <RichText content={content} />
    </div>
  );
};

export default PageHero;
