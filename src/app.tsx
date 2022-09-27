import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { createTheme, colors, ThemeProvider, CssBaseline } from '@mui/material';

import {
  MuiTypography,
  MuiButton,
  MuiTextField,
  MuiSelect,
  MuiRadio,
  MuiCheckbox,
  MuiSwitch,
  MuiRating,
  MuiAutocomplete,
  MuiLayout,
  MuiPaper,
  MuiCard,
  MuiAccordion,
  MuiImageList,
  MuiNavbar,
  MuiMenu,
  MuiLink,
  MuiBreadcrumbs,
  MuiDrawer,
  MuiSpeedDial,
  MuiBottomNavigation,
  MuiAvatar,
  MuiBadge,
  MuiList,
  MuiChip,
  MuiTooltip,
  MuiTable,
  MuiAlert,
  MuiSnackbar,
  MuiDialog,
  MuiProgress,
  MuiSkeleton,
  MuiLoadingButton,
  MuiDateTimePicker,
  MuiDateRangePicker,
  MuiTabs,
  MuiTimeline,
  MuiMasonry,
} from 'components';
import { MuiResponsiveness, MuiSx, MuiTheming } from 'core';

const theme = createTheme({
  settings: {
    colors: {
      primary: colors.blue[500],
    },
  },
  palette: {
    mode: 'dark',
    secondary: {
      main: colors.orange[500],
      darker: colors.orange[700],
    },
    custom: {
      main: colors.amber[500],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: 'Check-in', end: 'Check-out' }}>
        {/*<MuiTypography />*/}
        {/*<MuiButton />*/}
        {/*<MuiTextField />*/}
        {/*<MuiSelect />*/}
        {/*<MuiRadio />*/}
        {/*<MuiCheckbox />*/}
        {/*<MuiSwitch />*/}
        {/*<MuiRating />*/}
        {/*<MuiAutocomplete />*/}
        {/*<MuiLayout />*/}
        {/*<MuiPaper />*/}
        {/*<MuiCard />*/}
        {/*<MuiAccordion />*/}
        {/*<MuiImageList />*/}
        {/*<MuiNavbar />*/}
        {/*<MuiMenu />*/}
        {/* <MuiLink /> */}
        {/*<MuiBreadcrumbs />*/}
        {/*<MuiDrawer />*/}
        {/*<MuiSpeedDial />*/}
        {/*<MuiBottomNavigation />*/}
        {/*<MuiAvatar />*/}
        {/*<MuiBadge />*/}
        {/*<MuiList />*/}
        {/*<MuiChip />*/}
        {/*<MuiTooltip />*/}
        {/*<MuiTable />*/}
        {/*<MuiAlert />*/}
        {/*<MuiSnackbar />*/}
        {/*<MuiDialog />*/}
        {/*<MuiProgress />*/}
        {/*<MuiSkeleton />*/}
        {/*<MuiLoadingButton />*/}
        {/*<MuiDateTimePicker />*/}
        {/*<MuiDateRangePicker />*/}
        {/*<MuiTabs />*/}
        {/*<MuiTimeline />*/}
        {/*<MuiMasonry />*/}
        {/*<MuiResponsiveness />*/}
        {/*<MuiTheming />*/}
        <MuiSx />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
