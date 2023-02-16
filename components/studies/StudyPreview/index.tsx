import React from 'react';
import One from './One';
import Two from './Two';
import Three from './Three';
import useStyles from './css';
import { StudyPageType } from '@/lib/types/page';

type Props = {
  template: number;
  study: StudyPageType;
  first: boolean;
  last: boolean;
};

const templates = {
  1: One,
  2: Two,
  3: Three,
};

const StudyPreview: React.FC<Props> = ({ template, study, first, last }) => {
  const Template = templates[template];
  const classes = useStyles({ first, last });

  return (
    <div className={classes.preview}>
      <Template {...study} />
    </div>
  );
};

export default StudyPreview;
