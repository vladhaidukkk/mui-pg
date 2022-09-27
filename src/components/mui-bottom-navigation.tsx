import { SyntheticEvent, useState } from 'react';
import { Box, BottomNavigation, BottomNavigationAction, Stack, Typography } from '@mui/material';
import { Favorite, Home, Person } from '@mui/icons-material';

/*
 * BottomNavigation - a component for mobile-like navigation between main app sections (useful only for mobiles)
 *
 * 1. <BottomNavigation /> is a wrapper for all actions
 * 2. To add action to a navigation use <BottomNavigationAction /> component with label and icon props
 * 3. To always show labels add showLabels to the <BottomNavigation />
 * 4. If you want control current selected option you should use state for it
 * */

const actions = [
  { label: 'Home', icon: <Home /> },
  { label: 'Favorites', icon: <Favorite /> },
  { label: 'Profile', icon: <Person /> },
];

export const MuiBottomNavigation = () => {
  const [actionIdx, setActionIdx] = useState(0);

  const handleChangeAction = (_event: SyntheticEvent, newActionIdx: number) => {
    setActionIdx(newActionIdx);
  };

  return (
    <>
      <Stack p={2}>
        <Typography variant="h5" component="h1">
          {actions[actionIdx].label}
        </Typography>
      </Stack>
      <BottomNavigation
        sx={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}
        value={actionIdx}
        onChange={handleChangeAction}
        showLabels
      >
        {actions.map((action) => (
          <BottomNavigationAction key={action.label} label={action.label} icon={action.icon} />
        ))}
      </BottomNavigation>
    </>
  );
};
