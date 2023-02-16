import React from 'react';
import { Cell, Grid } from '@faceless-ui/css-grid';
import useStyles from './css';
import Padding from '../../components/layout/Padding';
import GridContainer from '../../components/layout/GridContainer';
import RichText from '../../components/RichText';
import BackgroundColor from '../../components/layout/BackgroundColor';
import Gutter from '../../components/layout/Gutter';
import { ContentType } from '@/lib/types/layout';

const colStyles = {
  oneThird: {
    cols: 4,
  },
  half: {
    cols: 6,
  },
  twoThirds: {
    cols: 8,
  },
  full: {
    cols: 12,
  },
};

const Content: React.FC<ContentType> = ({
  paddingTop,
  paddingBottom,
  accentLine,
  accentLineAlignment,
  columns,
  backgroundColor,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Gutter left right>
        <BackgroundColor color={backgroundColor}>
          <Padding top={paddingTop} bottom={paddingBottom}>
            <GridContainer className={classes.gridContainer}>
              {accentLine && (
                <div
                  className={[
                    classes.accentLine,
                    classes[`accentLine-${accentLineAlignment}`],
                  ]
                    .filter(Boolean)
                    .join(' ')}
                />
              )}
              <Grid>
                {columns?.map((col, i) => (
                  <Cell
                    key={i}
                    className={classes[`align-${col.alignment}`]}
                    {...colStyles[col.width]}
                    colsM={8}
                  >
                    <RichText content={col.content} />
                  </Cell>
                ))}
              </Grid>
            </GridContainer>
          </Padding>
        </BackgroundColor>
      </Gutter>
    </div>
  );
};

export default Content;
