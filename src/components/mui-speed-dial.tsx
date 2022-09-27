import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { ContentCopy, Print, Share } from '@mui/icons-material';

/*
 * SpeedDial - special component for fact actions which uses Floating Action Button under the hood and shows us a list of actions on hover/click
 *
 * 1. This component is very useful for mobile users because here we can put the most important actions in 1 place, but doesn't use it if it has more than 6 icons
 * 2. <SpeedDial /> is a wrapper which as children contains actions <SpeedDialAction /> and as prop can have icon <SpeedDialIcon />
 * 3. <SpeedDialAction /> must have icon prop, and as best practice should have tooltipTitle
 * 4. If you want tooltip text to be visible all the time add tooltipOpen prop
 * 5. <SpeedDialIcon /> can have openIcon prop and icon prop if you want to change default icon
 * */

export const MuiSpeedDial = () => {
  return (
    <SpeedDial ariaLabel="Fast actions" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
      <SpeedDialAction icon={<ContentCopy />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
      <SpeedDialAction icon={<Share />} tooltipTitle="Share" tooltipOpen />
    </SpeedDial>
  );
};
