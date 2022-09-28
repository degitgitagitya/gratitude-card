import Container from '@mui/material/Container';

import { Typography } from '@mui/material';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h2' sx={{ textAlign: 'center' }}>
        Hello Guys, Nothing Here
      </Typography>
    </Container>
  );
};

export default Home;
