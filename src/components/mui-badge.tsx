import { Badge, Stack } from '@mui/material';
import { Mail } from '@mui/icons-material';

/*
 * Badge - a component which generates a small badge to the top-right of its child
 *
 * 1. It has badgeContent prop where we pass a value or a component which will be our custom badge
 * 2. By default, it is places to top-right, but we can change position with anchorOrigin prop
 * 3. It also has 2 variants (standard, dot), color, showZero, max, invisible props
 * 4. <Badge /> has 1 interesting prop - overlap, which place the badge relative to the child corner
 * */

export const MuiBadge = () => {
  return (
    <Stack direction="row" p={4} spacing={2}>
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>
      <Badge
        badgeContent={5}
        color="primary"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="success" max={199}>
        <Mail />
      </Badge>
      <Badge variant="dot" color="success">
        <Mail />
      </Badge>
    </Stack>
  );
};
