/* eslint-disable jsx-a11y/anchor-is-valid */ // @ts-nocheck

import React from 'react';
import Link from 'next/link';
import { Grid, Cell } from '@faceless-ui/css-grid';
import GridContainer from '../../../layout/GridContainer';
import useStyles from './css';
import Button from '../../../Button';
import Parallax from '../../../Parallax';
import Media from '../../../Media';

const StudyPreviewOne: React.FC<any> = (props) => {
  const { title, meta, slug, previewMedia } = props;
  const classes = useStyles();

  return (
    <GridContainer>
      <h2>
        <Link href={`/study/${slug}`} className={classes.title}>
          {title}
        </Link>
      </h2>
      <Grid>
        <Cell start={3} startM={2} cols={6}>
          <p>{meta?.description}</p>
          <Link href={`/study/${slug}`} className={classes.link}>
            <Button label='Read the study' />
          </Link>
        </Cell>
      </Grid>
      <Grid>
        {previewMedia?.[0]?.media && (
          <Cell cols={7} colsM={4} className={classes.previewMediaOne}>
            <Parallax yDistance={100}>
              <Media preferredSize='portrait' {...previewMedia[0].media} />
            </Parallax>
          </Cell>
        )}
        {previewMedia?.[1]?.media && (
          <Cell cols={5} colsM={4} className={classes.previewMediaTwo}>
            <Parallax yDistance={50}>
              <Media preferredSize='portrait' {...previewMedia[1].media} />
            </Parallax>
          </Cell>
        )}
      </Grid>
    </GridContainer>
  );
};

export default StudyPreviewOne;
