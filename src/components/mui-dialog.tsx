import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

/*
 * Dialog - a modal component which informs users about some important information, and fully interrupt them. Useful for all types of important decisions
 *
 * 1. This component consists of 3 main sections: <DialogTitle />, <DialogContent />, <DialogActions /> and <Dialog /> as a wrapper
 * 2. You can manipulate content as you want and create even forms or some sort of lists inside <Dialog />
 * 3. As with <Snackbar /> you control <Dialog /> with a state and onClose action
 * 4. You can change <Dialog /> transition, make it to take full width, create nice responsiveness, and just do whatever you want with it
 * */

export const MuiDialog = () => {
  const [isOpened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <Box>
      <Button onClick={handleOpen} variant="outlined">
        Open dialog
      </Button>
      <Dialog open={isOpened} onClose={handleClose}>
        <DialogTitle>Confirm your decision</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to make a transaction? If you do it you won't have ability to cancel it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
