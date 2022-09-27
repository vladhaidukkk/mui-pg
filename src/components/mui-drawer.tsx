import { useState, MouseEvent } from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
  Menu,
} from '@mui/material';
import {
  Add,
  ArrowDropDown,
  ArrowDropUp,
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  ExpandMore,
  Explore,
  Menu as MenuIcon,
} from '@mui/icons-material';

/*
 * Drawer - a navigation component which creates modal-like component attached to one of the screen sides and can contain whatever we want and be opened whenever user want
 *
 * 1. <Drawer /> buy itself is like <AppBar /> - it's just a container, but here it has state (opened/closed)
 * 2. It can be placed in 4 positions (left, top, right, bottom) with anchor prop
 * 3. Inside <Drawer /> we can use whatever we want
 * */

type TAnchor = 'left' | 'right' | 'top' | 'bottom';

export const MuiDrawer = () => {
  const [anchor, setAnchor] = useState<TAnchor>('left');
  const [isOpened, setOpened] = useState(false);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const openedAnchorsMenu = !!anchorEl;

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  const handleOpenAnchorsMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAnchorsMenu = () => {
    setAnchorEl(null);
  };

  const handleSetAnchor = (anchor: TAnchor) => () => {
    setAnchor(anchor);
    setAnchorEl(null);
  };

  return (
    <Box p={2}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<MenuIcon />} onClick={handleOpen}>
          Open menu
        </Button>
        <Button variant="contained" endIcon={<ExpandMore />} onClick={handleOpenAnchorsMenu}>
          Change anchor
        </Button>
        <Menu
          anchorEl={anchorEl}
          onClose={handleCloseAnchorsMenu}
          open={openedAnchorsMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleSetAnchor('left')}>
            <ListItemIcon>
              <ArrowLeft />
            </ListItemIcon>
            <ListItemText>Left</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleSetAnchor('right')}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText>Right</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleSetAnchor('top')}>
            <ListItemIcon>
              <ArrowDropUp />
            </ListItemIcon>
            <ListItemText>Top</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleSetAnchor('bottom')}>
            <ListItemIcon>
              <ArrowDropDown />
            </ListItemIcon>
            <ListItemText>Bottom</ListItemText>
          </MenuItem>
        </Menu>
      </Stack>
      <Drawer anchor={anchor} onClose={handleClose} open={isOpened}>
        <Stack minWidth={300}>
          <Typography variant="subtitle1" component="div" px={2} pt={2}>
            {anchor.toUpperCase()} Side Drawer
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Add fontSize="small" />
                </ListItemIcon>
                <ListItemText>Create Note</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Edit fontSize="small" />
                </ListItemIcon>
                <ListItemText>Edit Note</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Delete fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete Note</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Explore fontSize="small" />
                </ListItemIcon>
                <ListItemText>Explore More</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </Drawer>
    </Box>
  );
};
