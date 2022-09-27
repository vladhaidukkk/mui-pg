import { Typography } from '@mui/material';

/*
 * Typography Component - use for text on the page
 *
 * 1. Has a lot of variants which change look of our text: variant=""
 * 2. By default has semantic tag depending on variantMapping, or we can set it by ourselves in component: variantMapping={}, component=""
 * 3. Has a lot of useful props like noWrap or gutterBottom etc: noWrap, gutterBottom...
 * */

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet atque et eum necessitatibus, nostrum odio
        quisquam, saepe sapiente vel veritatis voluptatibus? Asperiores consectetur esse exercitationem expedita, minima
        praesentium ut!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem cumque est impedit inventore praesentium
        suscipit voluptas voluptate! Dignissimos ea possimus quo rem vel! Autem fugit nemo placeat quas rem!
      </Typography>
    </div>
  );
};
