import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { Spoke } from '@mui/icons-material';

/*
 *  AppBar - a surface component which contains related information to the current screen (mostly used for headers/navigation-bars)
 *
 * 1. <AppBar /> by itself is just a container with positioning and background color
 * 2. Inside <AppBar /> we have to specify content, and if we want to have nice layout inside we can use <Toolbar />
 * 3. <Toolbar /> is a special component for <AppBar /> to have nice layout, but of course we can do the same with <Stack />
 * 4. <Toolbar /> has from the start some styles (padding, items aligning etc.), so from the start content inside will look fine
 * */

export const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" size="large" edge="start" aria-label="menu" sx={{ mr: 1 }}>
          <Spoke />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mui Navbar
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Docs</Button>
          <Button color="inherit">Components</Button>
          <Button variant="outlined" color="inherit">
            Start
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
