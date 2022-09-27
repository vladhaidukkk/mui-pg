import { SyntheticEvent, useState, forwardRef } from 'react';
import { Stack, Button, Snackbar, Alert, AlertProps, Slide, SlideProps } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';

/*
 * Snackbar - a special component which allow us to show in time messages to users which do not interrupt them (it's a Toast component)
 *
 * 1. MUI <Snackbar /> component allows you to use it where you want, but you can't by default create global provider, for this you can create own context or use Notistack package
 * 2. <Snackbar /> by default shows simple notification with message in message prop, we can also specify action in action prop
 * 3. onClose prop is called when we click outside the alert or after time specified in autoHideDuration, you can also add close btn as action
 * 4. You control state of the alerts with open prop, so to trigger snackbar alert you have to specify some action, and it should change open state to true
 * 5. You can change <Snackbar /> position with anchorOrigin, also you can change animation with TransitionComponent where you can pass component with transition
 * 6. You can use <Alert /> as a content of <Snackbar /> notifications
 * */

type TransitionProps = Omit<SlideProps, 'direction'>;

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SlideTransition = (props: TransitionProps) => {
  return <Slide {...props} direction="right" />;
};

const InnerComponent = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleOpenNotistackAlert = () => {
    enqueueSnackbar('Hello from Notistack', { variant: 'info' });
  };

  return (
    <Stack spacing={1}>
      <Button variant="outlined" onClick={handleOpenNotistackAlert}>
        Open notistack
      </Button>
    </Stack>
  );
};

export const MuiSnackbar = () => {
  const [isCustomOpened, setCustomOpened] = useState(false);
  const [isAlertOpened, setAlertOpened] = useState(false);

  const handleCustomOpen = () => {
    setCustomOpened(true);
  };

  const handleCustomClose = (_event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setCustomOpened(false);
  };

  const handleAlertOpen = () => {
    setAlertOpened(true);
  };

  const handleAlertClose = (_event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setAlertOpened(false);
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <Stack direction="row" spacing={2} p={2}>
        <Stack spacing={1}>
          <Button variant="outlined" onClick={handleCustomOpen}>
            Open custom
          </Button>
          <Button variant="outlined" color="error" onClick={handleCustomClose}>
            Close custom
          </Button>
        </Stack>
        <Stack spacing={1}>
          <Button variant="outlined" onClick={handleAlertOpen}>
            Open alert
          </Button>
          <Button variant="outlined" color="error" onClick={handleAlertClose}>
            Close custom
          </Button>
        </Stack>
        <InnerComponent />
      </Stack>

      <Snackbar
        message="Hello, world"
        open={isCustomOpened}
        autoHideDuration={4000}
        onClose={handleCustomClose}
        action={<Button>UNDO</Button>}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={SlideTransition}
      />

      <Snackbar
        open={isAlertOpened}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <SnackbarAlert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </SnackbarAlert>
      </Snackbar>
    </SnackbarProvider>
  );
};
