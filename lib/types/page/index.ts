import { CategoryType, MetaType } from '../common';
import { Layout, MediaType } from '../layout';

// Study
export type StudyPageType = {
  title: string;
  featuredMedia: MediaType;
  previewMedia: {
    media: MediaType;
  }[];
  layout: Layout[];
  client?: string;
  location?: string;
  categories?: CategoryType[];
  slug: string;
  meta: MetaType;
};

// Page
export type HeroType = 'minimal' | 'contentAboveMedia' | 'contentLeftOfMedia';

export type PageType = {
  title: string;
  heroType: 'minimal' | 'contentAboveMedia' | 'contentLeftOfMedia';
  heroContent: unknown;
  heroMedia?: MediaType;
  slug: string;
  image?: MediaType;
  layout: Layout[];
  meta: MetaType;
};

// Media
export type SizeDetails = {
  filename: string;
  width: number;
  height: number;
};

export type Size = 'card' | 'square' | 'portrait' | 'feature';

export type Type = {
  filename: string;
  alt: string;
  mimeType: string;
  sizes: {
    card?: SizeDetails;
    square?: SizeDetails;
    portrait?: SizeDetails;
    feature?: SizeDetails;
  };
};
