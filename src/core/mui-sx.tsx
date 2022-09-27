import { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { ContentCopy, Download, Save } from '@mui/icons-material';

/*
 * sx - a powerful prop which allow to change component styles with a lot of features
 *
 * 1. We have not visible access to Mui theme: when we are using colors we have access to palette, when using spacing our values will be thrown through theme.spacing() function...
 * 2. We can get visible access to the theme if we use as a value for a field a callback function, or we can use callback as a value for sx and inside use theme
 * 3. Every component consists of a lot of inner components, and we can change their styles in sx with special selectors like in SCSS
 * 4. We can pass to sx an array of different objects with styles and apply them conditionally
 * 5. And one thing that I covered before is responsiveness, we can use as a field value an object with breakpoints to make component responsive
 * */

export const MuiSx = () => {
  const [status, setStatus] = useState<'danger' | 'success'>('danger');

  const handleToggle = () => {
    setStatus((prev) => (prev === 'danger' ? 'success' : 'danger'));
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2} p={2}>
      <Button
        variant="outlined"
        startIcon={<Download />}
        sx={{
          px: 3,
          borderColor: 'secondary.main',
        }}
      >
        Download
      </Button>
      <Button
        variant="outlined"
        startIcon={<ContentCopy />}
        sx={(theme) => ({
          px: theme.spacing(3),
          borderColor: (theme) => theme.palette.secondary.main,
          '&.MuiButton-root': {
            height: '50px',
          },
        })}
      >
        Copy
      </Button>
      <Button
        variant="outlined"
        startIcon={<Save />}
        onClick={handleToggle}
        sx={[
          {
            width: {
              xs: 100,
              sm: 150,
              md: 200,
              lg: 250,
              xl: 300,
            },
          },
          status === 'danger' && {
            color: 'error.main',
          },
          status === 'success' && {
            color: 'success.main',
          },
        ]}
      >
        Save
      </Button>
    </Stack>
  );
};
