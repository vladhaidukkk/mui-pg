import { useState } from 'react';
import { Alert, AlertTitle, IconButton, Stack } from '@mui/material';
import { Bookmark, BookmarkBorder, Done } from '@mui/icons-material';

/*
 * Alert - a component to show small but important message to a user which will not interrupt him
 *
 * 1. This component has severity prop which is very important and says what type of information it delivers
 * 2. It also has color and variant props
 * 3. We can add title to an <Alert /> with <AlertTitle /> component as a child
 * 4. If you want to add an action you can insert any component inside action prop
 * 5. You can add onDelete action from the beginning just with onDelete prop which automatically add icon at the end
 * 6. You also can change default icon of the <Alert /> with icon prop or use iconMapping where for every severity assign an icon
 * */

export const MuiAlert = () => {
  const [isToggled, setToggled] = useState(false);
  const [isDeleted, setDeleted] = useState(false);

  return (
    <Stack spacing={2} p={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">
        <AlertTitle>This is a title</AlertTitle>
        This is a warning alert — check it out!
      </Alert>
      <Alert
        severity="info"
        variant="outlined"
        action={
          <IconButton color="info" onClick={() => setToggled((prev) => !prev)}>
            {isToggled ? <Bookmark fontSize="small" /> : <BookmarkBorder fontSize="small" />}
          </IconButton>
        }
      >
        This is an info alert — check it out!
      </Alert>
      {!isDeleted && (
        <Alert severity="success" variant="filled" icon={<Done />} onClose={() => setDeleted(true)}>
          This is a success alert — check it out!
        </Alert>
      )}
    </Stack>
  );
};
