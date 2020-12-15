import { Box, Container, Divider, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import AddIcon from '../assets/add.svg';
import Illustration from '../assets/illustration.svg';
import UplinkLogo from '../assets/logo.svg';

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={UplinkLogo} height={48} />
      <Container fixed className={styles.card}>
        <img className={styles.image} src={Illustration} />
        <div className={styles.textContainer}>
          <Typography className={styles.title} variant="h2" gutterBottom>
            Simple, private file sharing
          </Typography>
          <Typography variant="body2">
            Uplink lets you share files with end-to-end encryption and a link
            that automatically expires. So you can keep what you share private
            and make sure your stuff doesn&apos;t stay online forever.
          </Typography>
        </div>
        <Divider />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className={styles.bottomCardContainer}
        >
          <div className={styles.addItemsContainer}>
            <img src={AddIcon} />
          </div>
          <div className={styles.bottomTextContainer}>
            <Typography className={styles.title} variant="h2" gutterBottom>
              Add Files
            </Typography>
            <Typography variant="body2">
              Drag and drop your files here or select files from your computer
              to upload.
            </Typography>
          </div>
        </Box>
      </Container>
    </div>
  );
}

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    [breakpoints.down('sm')]: {
      backgroundColor: palette.primary.light,
    },
    [breakpoints.between('sm', 'xl')]: {
      padding: '30px',
      backgroundColor: palette.secondary.light,
    },
  },
  logo: {
    alignSelf: 'flex-start',
    [breakpoints.down('xs')]: {
      paddingLeft: 24,
    },
  },
  card: {
    backgroundColor: palette.primary.light,
    margin: 'auto',
    borderRadius: 36,
    [breakpoints.between('sm', 'xl')]: {
      width: 600,
    },
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  image: {
    margin: 'auto',
    display: 'block',
    paddingTop: 36,
    [breakpoints.down('xs')]: {
      width: 300,
    },
  },
  textContainer: {
    padding: 36,
  },
  title: {
    fontSize: 24,
  },
  bottomCardContainer: {
    margin: 36,
  },
  addItemsContainer: {
    width: 96,
    height: 96,
    borderRadius: 24,
    backgroundColor: palette.secondary.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTextContainer: {
    flex: 1,
    marginLeft: 24,
  },
}));
