import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Download, Save } from '@mui/icons-material';

/*
 * LoadingButton - a component from a @mui/lib that allows us to easily control loading state of the button (useful when button start fetching/loading something)
 *
 * 1. It has loading prop which control button state
 * 2. By default, button has circular loader, but we can change loading indicator with loadingIndicator prop
 * 3. We can change loading indicator position with loadingPosition, but if it's not center, text of the button will be visible, so it's better to do this if button has an icon
 * 4. All other props from <Button /> are available in this button too
 * */

export const MuiLoadingButton = () => {
  return (
    <Stack direction="row" spacing={2} p={2}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="Loading..." sx={{ px: 3 }}>
        Submit
      </LoadingButton>

      <LoadingButton loadingPosition="start" variant="outlined" startIcon={<Save />}>
        Save
      </LoadingButton>
      <LoadingButton loading loadingPosition="start" variant="outlined" startIcon={<Save />}>
        Save
      </LoadingButton>

      <LoadingButton loadingPosition="end" variant="outlined" endIcon={<Download />}>
        Download
      </LoadingButton>
      <LoadingButton loading loadingPosition="end" variant="outlined" endIcon={<Download />}>
        Download
      </LoadingButton>
    </Stack>
  );
};
