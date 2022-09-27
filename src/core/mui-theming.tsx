import { Box, Stack, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

/*
 * Custom Theme - if you want to change/extend default theme with custom properties you can do it with createTheme function
 *
 * 1. To change/extend default theme use createTheme function and provide it to the application with <ThemeProvider /> wrapper
 * 2. All new properties will not work with TypeScript, so you have to declare them inside theme.d.ts file to work correctly
 * 3. Custom theme is very powerful thing, because you can change all field from default theme and your app will look incredible, plus you can add your own fields
 * 4. sx prop have access to theme, but it depends on property which you define, if you define color you must not write theme.palette..., just skip that part and use only color name
 * 5. You can style components with styled function, and there you can get access to theme object
 * 6. You also can get access to the theme with useTheme hook which returns theme object
 * 7. We have <CssBaseline /> component which we can use in 1 place, and it will fix all problems between browsers, reset some styles and enable default styles for standard tags, so they will be nice on light/dark mode
 * */

const defaultSx = {
  width: 200,
  height: 200,
};

const StyledBox = styled(Box)(({ theme }) => ({
  ...defaultSx,
  backgroundColor: theme.settings.colors.primary,
  color: theme.palette.secondary.darker,
}));

export const MuiTheming = () => {
  const theme = useTheme();

  return (
    <Stack direction="row" spacing={3} p={2}>
      <Box sx={{ ...defaultSx, bgcolor: 'secondary.main' }} />
      <Box sx={{ ...defaultSx, bgcolor: 'secondary.darker' }} />
      <Box sx={{ ...defaultSx, bgcolor: 'custom.main' }} />
      <StyledBox />
      <Box sx={{ ...defaultSx, bgcolor: theme.palette.info.main }} />
    </Stack>
  );
};
