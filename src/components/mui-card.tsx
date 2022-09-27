import { Grid, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

/*
 * Card - a component which contains content and actions about a single subject
 *
 * 1. To create card we should use <Card /> as a wrapper and <CardHeader />, <CardContent />, <CardMedia />, <CardActions /> and <CardActionsArea /> for different card sections
 * 2. <CardHeader /> is used as a container for head section of the card
 * 3. <CardContent /> is used as a container for main content of the card
 * 4. <CardMedia /> is used for images, videos etc. of the card
 * 5. <CardActions /> is used as a container for buttons of other card actions
 * 6. <CardActionsArea /> is used to make card content clickable
 * 7. We can use as many of these components as we want to create really advanced cards
 * */

interface ICustomCardProps {
  title: string;
  description: string;
}

const CustomCard = ({ title, description }: ICustomCardProps) => {
  return (
    <Card elevation={3}>
      <CardMedia component="img" height="160" image="https://source.unsplash.com/random" alt="Image from unsplash" />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Share</Button>
        <Button>Learn more</Button>
      </CardActions>
    </Card>
  );
};

export const MuiCard = () => {
  return (
    <Grid container p={2} spacing={3}>
      <Grid item>
        <CustomCard title="React" description="A JavaScript library for building user interfaces" />
      </Grid>
      <Grid item>
        <CustomCard title="Vue" description="A JavaScript library for building user interfaces" />
      </Grid>
      <Grid item>
        <CustomCard title="Angular" description="A JavaScript library for building user interfaces" />
      </Grid>
      <Grid item>
        <CustomCard title="Next.js" description="A JavaScript library for building user interfaces" />
      </Grid>
    </Grid>
  );
};
