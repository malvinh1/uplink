import {makeStyles} from '@material-ui/core';
import React from 'react';

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <h1>HOME SCREEN</h1>
    </div>
  );
}

const useStyles = makeStyles(({palette}) => ({
  root: {
    background: `${palette.primary.main}`,
  },
}));
