import { useState } from 'react';
import { InputAdornment, Stack, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

/*
 * TextField - component for any type of text field
 *
 * 1. Has color, size, variant (filled, outlined, standard) props
 * 2. Has type, label, required, disabled, placeholder, defaultValue, helperText, error props
 * 3. To make field controlled we use the same props as always (value, onChange)
 * 4. <TextField /> is a collection of smaller components, so to modify subcomponents props we have InputProps and InputLabelProps
 * 5. To add icon or some text use <InputAdornment />
 * 6. <TextField /> is very powerful because it's the only form component which has all out of the box
 * */

const SPACING = 2;

export const MuiTextField = () => {
  const [password, setPassword] = useState('');
  const [isVisible, setVisible] = useState(false);

  return (
    <Stack spacing={SPACING}>
      <Stack spacing={SPACING} direction="row">
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Stack>

      <Stack spacing={SPACING} direction="row">
        <TextField label="Small" size="small" />
        <TextField label="Small" size="medium" color="success" />
      </Stack>

      <Stack spacing={SPACING} direction="row">
        <TextField label="Required" required />
        <TextField label="Disabled" disabled />
        <TextField
          label="Readonly"
          helperText="Can't modify"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField label="Full width" fullWidth variant="filled" />
      </Stack>

      <Stack spacing={SPACING} direction="row">
        <TextField label="Number" type="number" />
        <TextField
          label="Password"
          type={isVisible ? 'text' : 'password'}
          error={password.length < 6}
          helperText={password.length < 6 ? 'Min 6 symbols' : undefined}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={() => setVisible((prev) => !prev)} sx={{ cursor: 'pointer' }}>
                {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Multiline"
          multiline
          minRows={2}
          InputProps={{
            startAdornment: <InputAdornment position="start">{'>'}</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
