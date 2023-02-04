import { PageType } from '../page';
export type BackgroundColorType = 'orange' | 'red' | 'none' | 'blue' | 'gray';

export type ColumnWidth = 'oneThird' | 'half' | 'twoThirds' | 'full';

export type Alignment = 'left' | 'center' | 'right';

export type AccentLineAlignment = 'left' | 'right';

export type PaddingSize = 'none' | 'small' | 'medium' | 'large';

export type Column = {
  content: unknown;
  width: ColumnWidth;
  alignment: Alignment;
};
export type Icon = 'none' | 'arrow';
export type CategoryType = {
  title: string;
  slug: string;
};

export type MetaType = {
  title?: string;
  description?: string;
  keywords?: string;
};

export type LinkType = {
  type: 'page' | 'custom';
  label: string;
  page?: PageType;
  url?: string;
};

// Globals
export type MegaMenuType = {
  nav: {
    link: LinkType;
  }[];
};
export type FooterType = {
  nav: {
    link: LinkType;
  }[];
};
export type SocialMediaType = {
  links: {
    label: string;
    url: string;
  }[];
};
