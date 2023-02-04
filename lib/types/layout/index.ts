import {
  AccentLineAlignment,
  BackgroundColorType,
  Column,
  Icon,
  LinkType,
  PaddingSize,
} from '../common';

//CallToActionType
export type CallToActionAction = {
  link: LinkType;
};

export type CallToActionType = {
  backgroundColor: BackgroundColorType;
  content: unknown;
  actions: CallToActionAction[];
  blockType: 'call-to-action';
};
//ContentType
export type ContentType = {
  blockType: 'content';
  blockName?: string;
  columns: Column[];
  accentLine: boolean;
  accentLineAlignment: AccentLineAlignment;
  paddingTop: PaddingSize;
  paddingBottom: PaddingSize;
  backgroundColor: BackgroundColorType;
};
//CTAGridType
export type CTAGridAction = {
  headline: string;
  icon?: Icon;
  link: LinkType;
};

export type CTAGridType = {
  actions: CTAGridAction[];
  blockType: 'cta-grid';
};
export type SizeDetails = {
  filename: string;
  width: number;
  height: number;
};
//MediaBlockType
export type Size = 'card' | 'square' | 'portrait' | 'feature';

export type MediaType = {
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

export type MediaBlockType = {
  blockType: 'media';
  blockName?: string;
  media: MediaType;
  caption?: any;
  type: 'normal' | 'wide' | 'fullscreen';
};
//MediaCollageType
export type Media = {
  media: MediaType;
};

export type MediaCollageType = {
  media: Media[];
  blockType: 'media-collage';
};

//ImageContentCollageType
export type ImageContentCollageType = {
  backgroundColor: BackgroundColorType;
  content: unknown;
  enableCTA: boolean;
  link: LinkType;
  media: Media[];
  blockType: 'media-content-collage';
};
//MediaGridType
export type MediaTypeContent = {
  media: MediaType;
  content?: string;
};

export type MediaGridType = {
  backgroundColor: BackgroundColorType;
  content?: unknown;
  media: MediaTypeContent[];
  blockType: 'media-grid';
};
//MediaStatCollageType
export type OverlaySizes = 'none' | 'small' | 'medium' | 'large';

export type OverlapType = {
  topOverlap: OverlaySizes;
  bottomOverlap: OverlaySizes;
};
export type StatType = {
  stat: string;
  description: string;
};
export type MediaStatCollageType = {
  media: {
    media: MediaType;
  };
  stats: {
    stat: StatType[];
  };
  blockType: 'media-stat-collage';
} & OverlapType;
//SliderType
export type Slide = {
  media: MediaType;
};

export type SliderType = {
  backgroundColor: BackgroundColorType;
  slides: Slide[];
  blockType: 'slider';
};

// SpacerType
export type SpacerType = {
  size: 'small' | 'medium' | 'large';
  blockType: 'spacer';
};
//StatisticsType
export type StatisticsType = {
  stats: StatType[];
  backgroundColor: BackgroundColorType;
  blockType: 'statistics';
} & OverlapType;

//StickyContentType

export type Section = {
  label: string;
  description: string;
};

export type StickyContentType = {
  sections: Section[];
  blockType: 'sticky-content';
};

export type StudySliderType = {
  backgroundColor: BackgroundColorType;
  studies: any; // StudyType[]
  blockType: 'study-slider';
};

export type Layout =
  | CallToActionType
  | ContentType
  | CTAGridType
  | MediaBlockType
  | MediaCollageType
  | ImageContentCollageType
  | MediaGridType
  | MediaStatCollageType
  | SliderType
  | SpacerType
  | StatisticsType
  | StickyContentType
  | StudySliderType;
