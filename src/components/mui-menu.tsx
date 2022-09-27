import { useState, MouseEvent } from 'react';
import {
  Stack,
  Button,
  Menu,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import { Add, Delete, Edit, Share, UnfoldMore } from '@mui/icons-material';

/*
 * Menu - a component which allow to group list of options in a temporary surfaces
 *
 * 1. We can connect <Menu> component to some clickable element like <Button /> with anchorEl and open props, for this we need of course to define some state
 * 2. Inside <Menu /> we have to use <MenuItem /> for single option, and inside <MenuItem /> we can use a lot of other components as <ListItemIcon />, <ListItemText /> etc. and of course can use just simple tags/components
 * 3. We can position our menu as we want, for this we can use anchorOrigin and transformOrigin props (Mui Popover documentation has nice control panel for this)
 * 4. If we want to create just a list of options without connection to clickable component we can use <MenuList /> instead of <Menu />
 * */

export const MuiMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const opened = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack spacing={4} p={4}>
      <div>
        <Button
          variant="contained"
          onClick={handleOpen}
          aria-controls={opened ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={opened ? 'true' : undefined}
          endIcon={<UnfoldMore />}
        >
          Options
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={opened}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuItem onClick={handleClose}>Create</MenuItem>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </div>
      <Paper sx={{ width: 320 }} elevation={2}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <Add fontSize="small" />
            </ListItemIcon>
            <ListItemText>Create</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘N
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Edit fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘E
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Delete fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘D
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Share fontSize="small" />
            </ListItemIcon>
            <ListItemText>Share</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
};
