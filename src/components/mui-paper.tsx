import { ChangeEvent, useState } from 'react';
import { Button, Paper, Rating, Typography, Container, Stack } from '@mui/material';
import { Share } from '@mui/icons-material';

/*
 * Paper - a component for paper sheet to divide page into sections (Material Design approach)
 *
 * 1. It's just a div with shadow and rounded border (very easy to create just with a simple <Box />)
 * 2. We can manipulate shadow by evaluation property
 * 3. To remove border radius we can use square prop
 * 4. <Paper /> also has 2 variants: with shadow or with border
 * 5. And of course this component has all System props, sx and classes
 * */

export const MuiPaper = () => {
  const [rating, setRating] = useState<number | null>(null);

  const handleChangeRating = (event: ChangeEvent<{}>, value: number | null) => {
    setRating(value);
  };

  return (
    <Container fixed sx={{ mt: 4 }}>
      <Paper sx={{ p: 2 }} elevation={3}>
        <Stack spacing={1} alignItems="start">
          <Typography variant="h3" component="h1">
            React
          </Typography>
          <Typography>A JavaScript library for building user interfaces</Typography>
          <Rating value={rating} onChange={handleChangeRating} readOnly={!!rating} />
          <Button startIcon={<Share />} variant="outlined">
            Share
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};
