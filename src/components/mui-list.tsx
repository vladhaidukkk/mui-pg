import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  IconButton,
  ListSubheader,
  Divider,
} from '@mui/material';
import { Add, Edit, Message, MoreHoriz } from '@mui/icons-material';

/*
 * List - a base component which allows you to create different lists from very simple to incredibly difficult
 *
 * 1. To create list we have <List /> wrapper, <ListItem /> or <ListItemButton /> for single items (we can nest <ListItemButton /> into <ListItem />)
 * 2. Each list item consists of different parts: <ListItemIcon />, <ListItemText />, <ListItemAvatar />, <ListItemSecondaryAction />, <ListSubheader />
 * 3. We can add list secondary action with <ListSecondaryAction /> or with secondaryAction prop in single item
 * 4. <ListItemText /> has primary and secondary text
 * 5. <List /> has dense prop which make the whole list more compact
 * 6. Each item has default padding which can be removed with disablePadding/disableGutter
 * 7. We can divide list items with <Divider />
 * 8. We can do whatever we want inside <List /> and actually this is very powerful component which can be really very complicated
 * */

const getUserAvatar = (gender: 'men' | 'women') => {
  const index = Math.floor(Math.random() * 99);

  return `https://randomuser.me/api/portraits/${gender}/${index}.jpg`;
};

export const MuiList = () => {
  return (
    <Grid container gap={2}>
      <Grid item sx={{ bgcolor: '#eee', flexGrow: 1 }}>
        <List dense subheader={<ListSubheader>Users list</ListSubheader>}>
          <ListItem
            secondaryAction={
              <IconButton>
                <Message />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar src={getUserAvatar('men')} alt="User" />
            </ListItemAvatar>
            <ListItemText primary="User #1" secondary="email@gmail.com" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton>
                <Message />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar src={getUserAvatar('men')} alt="User" />
            </ListItemAvatar>
            <ListItemText primary="User #2" secondary="email@gmail.com" />
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton>
                <Message />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar src={getUserAvatar('men')} alt="User" />
            </ListItemAvatar>
            <ListItemText primary="User #3" secondary="email@gmail.com" />
          </ListItem>
        </List>
      </Grid>

      <Grid item sx={{ bgcolor: '#eee', flexGrow: 1 }}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Create" secondary="Create new note" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Edit />
            </ListItemIcon>
            <ListItemText primary="Edit" secondary="Edit note" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <MoreHoriz />
            </ListItemIcon>
            <ListItemText primary="All actions" secondary="Open all actions" />
          </ListItemButton>
        </List>
      </Grid>
    </Grid>
  );
};
