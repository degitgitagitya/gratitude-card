import * as React from 'react';
import Container from '@mui/material/Container';
import Image from 'next/image';

import { Card, Typography, Box, Divider } from '@mui/material';

interface LayoutProps {
  name: string;
  illustration: any;
  trait: string;
  description: string[];
}

const Layout: React.FC<LayoutProps> = ({
  name,
  illustration,
  trait,
  description,
}) => {
  return (
    <Container maxWidth='xs'>
      <Card
        variant='outlined'
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          my: 2,
        }}
      >
        <Typography gutterBottom variant='h3'>
          {name}
        </Typography>

        <Box>
          <Image src={illustration} alt={`${name} Illustration`} />
        </Box>

        <Box sx={{ width: '100%', mt: 2 }}>
          <Divider>
            <Typography gutterBottom variant='h4'>
              {trait}
            </Typography>
          </Divider>
        </Box>

        {description.map((item, index) => (
          <Typography gutterBottom key={index} sx={{ width: '100%' }}>
            {item}
          </Typography>
        ))}

        <Box sx={{ width: '100%', my: 2 }}>
          <Divider />
        </Box>

        <Typography sx={{ textAlign: 'right', width: '100%' }}>
          by De Gitgit Agitya
        </Typography>
      </Card>
    </Container>
  );
};

export default Layout;
