import { Box } from '@mui/material';

/* Responsiveness in MUI
 *
 * Everywhere in MUI components you can use as a field value object of breakpoints: { xs: ..., sm: ..., md: ..., lg: ..., xl: ... } (or your custom breakpoint)
 * With this technique value for a field will be taken depending on current window width
 * That's how responsiveness works in MUI
 * */

export const MuiResponsiveness = () => {
  return (
    <Box
      sx={{
        width: {
          xs: 100, // 0+
          sm: 200, // 600+
          md: 300, // 900+
          lg: 400, // 1200+
          xl: 500, // 1536+
        },
        height: {
          xs: 100, // 0+
          sm: 200, // 600+
          md: 300, // 900+
          lg: 400, // 1200+
          xl: 500, // 1536+
        },
        bgcolor: 'primary.light',
        borderRadius: 5,
      }}
    />
  );
};
