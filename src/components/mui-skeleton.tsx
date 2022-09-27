import { Box, Avatar, Skeleton, Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useEffect, useState } from 'react';

/*
 * Skeleton - displays a placeholder preview of data before the data gets loaded
 *
 * 1. It can be of 3 variants: text - adapts for <Typography /> variant, circular and rectangular
 * 2. It has 2 types of animation: pulse and wave, or can be without any animation
 * 3. We can easily change width and height of the <Skeleton /> to match our requirements, or with text it will do it by itself if we wrap it with <Typography />
 * */

export const MuiSkeleton = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timeount = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeount);
  });

  return (
    <Stack direction="row" p={2} spacing={3}>
      <Box sx={{ width: '250px' }}>
        <Skeleton variant="rectangular" width={250} height={144} animation="wave" />
        <Stack direction="row" sx={{ width: '100%', mt: 1.5, overflow: 'hidden' }} spacing={1.5}>
          <Skeleton variant="circular" sx={{ width: 40, height: 40, flexShrink: 0 }} animation="wave" />
          <Stack sx={{ flexGrow: 1 }}>
            <Typography variant="body1">
              <Skeleton variant="text" width="100%" animation="wave" />
            </Typography>
            <Typography variant="body2">
              <Skeleton variant="text" width="100%" animation="wave" />
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ width: '250px' }}>
        {isLoading ? (
          <Skeleton variant="rectangular" width={250} height={144} animation="wave" />
        ) : (
          <img src="https://source.unsplash.com/random" alt="Image" width={250} height={144} />
        )}
        <Stack direction="row" sx={{ width: '100%', mt: 1.5, overflow: 'hidden' }} spacing={1.5}>
          {isLoading ? (
            <>
              <Skeleton variant="circular" sx={{ width: 40, height: 40, flexShrink: 0 }} animation="wave" />
              <Stack sx={{ flexGrow: 1 }}>
                <Typography variant="body1">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
                <Typography variant="body2">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
              </Stack>
            </>
          ) : (
            <>
              <Avatar sx={{ width: 40, height: 40, flexShrink: 0, bgcolor: blue[300] }}>JD</Avatar>
              <Stack sx={{ flexGrow: 1, width: '200px' }}>
                <Typography variant="body1" noWrap>
                  How to become Pro Developer
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  Watch if you want to be better developer
                </Typography>
              </Stack>
            </>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};
