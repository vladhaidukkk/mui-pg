import { Box, Paper } from '@mui/material';
import { Masonry } from '@mui/lab';

/*
 * Masonry - a special component from Mui Lab that lay out different blocks with the same width but with different height (useful only for images gallery to nicely contain all)
 *
 * 1. To use this component we just need to use <Masonry /> and add columns and spacing props to it
 * 2. Inside <Masonry /> we can put whatever we want, but with specified height
 * */

const heights = [130, 75, 35, 100, 85, 75, 25, 55, 150, 175, 95, 105];

export const MuiMasonry = () => {
  return (
    <Box width={500} p={2}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, idx) => (
          <Paper elevation={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height }}>
            {idx}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};
