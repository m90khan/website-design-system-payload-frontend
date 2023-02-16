import React from 'react';
import NextHead from 'next/head';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

const defaultDescription = 'Website system design';
const defaultTitle = 'Delta + NextJS System Design';
const titleSuffix = ' | Design System';
const defaultOGImage = `${process.env.NEXT_PUBLIC_SERVER_URL}/images/og-image.jpg`;
const defaultKeywords = 'NextJS, Payload CMS, boilerplate';

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
  keywords?: string;
};

const Head: React.FC<Props> = ({ title, description, ogImage, keywords }) => {
  const { asPath } = useRouter();

  const getTitle = () => {
    if (title) return title + titleSuffix;
    return defaultTitle;
  };

  return (
    <NextHead>
      <title>{getTitle()}</title>

      <meta name='description' content={description || defaultDescription} />
      <meta name='keywords' content={keywords || defaultKeywords} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        property='og:url'
        content={`${process.env.NEXT_PUBLIC_SERVER_URL}${asPath}`}
      />
      <meta property='og:title' content={title || defaultTitle} />
      <meta property='og:description' content={description || defaultDescription} />
      <meta property='twitter:title' content={title || defaultTitle} />
      <meta name='twitter:site' content='@payloadcms' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={ogImage || defaultOGImage} />
      <meta property='og:image' content={ogImage || defaultOGImage} />
    </NextHead>
  );
};

export default Head;
