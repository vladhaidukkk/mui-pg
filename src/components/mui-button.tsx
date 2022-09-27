import { useState, MouseEvent } from 'react';
import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

/*
 * Button, IconButton - components for buttons
 *
 * 1. Have 3 variants (text, contained, outlined)
 * 2. Have 6 default colors (primary, secondary, info, error, success, warning)
 * 3. Have 3 sizes (small, medium, large)
 * 4. Have a lot of props for better customization like: disableElevation, disableRipple etc.
 * 5. For buttons with icons we can use <Button startIcon={} endIcon={} /> of <IconButton />
 * 6. We also can use <LoadingButton /> which have 2 states (isLoading, isLoaded), but it is in Mui Lab
 *
 * ButtonGroup - component to group few buttons into 1 group (can be useful when we have different variants for one purpose but with different values or just to create 1 complicated button from 2+ buttons)
 *
 * 1. Here we can better specify such props like variant, size, color etc. for the wrapper and not for every button
 * 2. We can change orientation of the group to be vertical or horizontal: orientation=""
 *
 * ToggleButton, ToggleButtonGroup - buttons group with state (we can use <ToggleButton /> as single button with selected field, but we should specify useless value field in this situation)
 *
 * 1. Has all props which has simple <Button />
 * 2. Has value prop where we can pass value of button
 * 3. We can make buttons to select 1 option with exclusive prop, or by default to allow as mush as possible selections
 * */

enum Formatters {
  Bold = 'bold',
  Italic = 'italic',
  Underlined = 'underlined',
}

const SPACING = 2;

export const MuiButton = () => {
  const [formats, setFormats] = useState<Formatters[]>([]);
  const [formatter, setFormatter] = useState<Formatters | null>(null);
  const [isBold, setBold] = useState(false);

  const handleChangeFormatters = (_event: MouseEvent<HTMLElement>, newFormats: Formatters[]) => {
    setFormats(newFormats);
  };

  const handleChangeFormatter = (_event: MouseEvent<HTMLElement>, newFormatter: Formatters | null) => {
    setFormatter(newFormatter);
  };

  const handleChangeBold = () => {
    setBold((prev) => !prev);
  };

  return (
    <Stack spacing={SPACING}>
      <Stack spacing={SPACING} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={SPACING} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack display="block" spacing={SPACING} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={SPACING} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <IconButton color="primary" aria-label="send message">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack display="block" spacing={SPACING} direction="row">
        <ButtonGroup variant="contained" color="info" aria-label="alignment buttons group">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>

        <ButtonGroup variant="contained" color="secondary" orientation="vertical" aria-label="component buttons group">
          <Button>Typography</Button>
          <Button>Button</Button>
          <Button>Stack</Button>
        </ButtonGroup>
      </Stack>

      <Stack spacing={SPACING} direction="row" alignItems="start">
        <ToggleButtonGroup value={formats} onChange={handleChangeFormatters} color="success" size="small">
          <ToggleButton value={Formatters.Bold}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={Formatters.Italic}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={Formatters.Underlined}>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          orientation="vertical"
          value={formatter}
          onChange={handleChangeFormatter}
          color="warning"
          size="small"
          exclusive
        >
          <ToggleButton value={Formatters.Bold}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={Formatters.Italic}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={Formatters.Underlined}>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButton value={Formatters.Bold} selected={isBold} onChange={handleChangeBold} size="small" color="error">
          <FormatBoldIcon />
        </ToggleButton>
      </Stack>
    </Stack>
  );
};
