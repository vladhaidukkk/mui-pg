import { SimplePaletteColorOptions } from '@mui/material';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    settings: {
      colors: Record<string, CSSProperties['color']>;
    };
  }

  interface ThemeOptions {
    settings: {
      colors: Record<string, CSSProperties['color']>;
    };
  }

  interface Palette {
    custom: SimplePaletteColorOptions;
  }

  interface PaletteOptions {
    custom: SimplePaletteColorOptions;
  }

  interface PaletteColor {
    darker?: CSSProperties['color'];
  }

  interface SimplePaletteColorOptions {
    darker?: CSSProperties['color'];
  }
}
