import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';

/*
 * Tooltip - a component which shows an additional info about an action oh hover, focus, or tab
 *
 * 1. <Tooltip /> contains a component to which it will be attached
 * 2. <Tooltip /> has title prop for its text, placement prop for position, arrow for enabling arrow nearby box
 * 3. We have other props like enterDelay or leaveDelay which add delay before entering and after leaving for better user experience
 * */

export const MuiTooltip = () => {
  return (
    <Box p={2}>
      <Tooltip title="Delete" placement="right" arrow enterDelay={500} leaveDelay={200}>
        <IconButton color="primary">
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
