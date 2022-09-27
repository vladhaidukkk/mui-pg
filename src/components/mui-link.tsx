import { Link, Stack } from '@mui/material';

/*
 * Link - one of the simplest components which just has appearance of a link
 *
 * 1. It has all System props as well as sx prop
 * 2. Two main props are color - for text color and underline - for variant of underline (hover, none, always)
 * 3. <Link /> also has variant prop like <Typography />, but by default it will have font style like parent (inherit from parent)
 * */

export const MuiLink = () => {
  return (
    <Stack direction="row" spacing={4} p={4}>
      <Link href="https://www.google.com" target="_blank">
        Default Link
      </Link>
      <Link href="#" underline="hover" color="secondary">
        Underline on Hover
      </Link>
      <Link href="#" underline="none" color="error">
        No Underline
      </Link>
    </Stack>
  );
};
