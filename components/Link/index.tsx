/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { LinkType } from '@/lib/types/common';

type Props = {
  className?: string;
} & LinkType;

const CMSLink: React.FC<any> = ({ type, page, url, children, className }) => {
  const isRelativeURL = url?.indexOf('/') === 0;

  if (type === 'page' || isRelativeURL) {
    return (
      <Link
        href={type === 'page' ? `/${page?.slug}` : url}
        scroll={false}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <a href={url} className={className}>
      {children}
    </a>
  );
};

export default CMSLink;
