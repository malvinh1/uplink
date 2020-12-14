import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Illustration from '../assets/illustration.svg';
import UplinkLogo from '../assets/logo.svg';

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <img src={UplinkLogo} height={48} />
      <div className={styles.card}>
        <img className={styles.image} src={Illustration} />
        <Typography variant="h2" style={{ fontSize: 24 }} gutterBottom>
          Simple, private file sharing
        </Typography>
        <Typography variant="body2">
          Uplink lets you share files with end-to-end encryption and a link that
          automatically expires. So you can keep what you share private and make
          sure your stuff doesn&apos;t stay online forever.
        </Typography>
        <div style={{ height: 1, backgroundColor: '#e8e8e8' }} />
      </div>
    </div>
  );
}

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  container: {
    height: `100vh`,
    backgroundColor: palette.secondary.light,
    [breakpoints.up('sm')]: {
      padding: 60,
    },
  },
  card: {
    backgroundColor: palette.primary.light,
    margin: 'auto',

    borderRadius: 36,
    [breakpoints.up('lg')]: {
      width: 600,
      height: 704,
    },
  },
  image: {
    margin: 'auto',
    display: 'block',
    paddingTop: 36,
  },
}));
