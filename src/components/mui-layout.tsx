import { Box, Container, Divider, Grid, Stack } from '@mui/material';
import { ReactNode } from 'react';

/*
 * Layout components: Box, Container, Stack, Grid, ImageList (extra 1)
 *
 * 1. The goal of the layout component to create flexible(responsive) webpage with nice elements positioning
 * 2. These components can we named as the most important
 * 3. They allow you not to use CSS to create grids, flex-boxes or any other things with it (just use components)
 *
 * ------- <Box /> -------
 *
 * 1. The most basic component of MUI
 * 2. It's just a wrapper for a DOM Node like div, span etc.
 * 3. By default, it's div, but you can change it with component prop
 * 4. Main and only 1 reason why you should use it instead of simple <div /> or any other node is that it has all MUI System props as well as sx
 * 5. sx prop is one of the most powerful prop is MUI that allow you to modify styles of any MUI component with access to theme values
 *
 * ------- <Container /> -------
 *
 * 1. One of the simples component which just center all content inside horizontally
 * 2. It has some breakpoints (xs, sm, md, lg, xl) and for every breakpoint max-width of the <Container /> is different
 * 3. By default, every <Container /> has predefined max-width with maxWidth prop set to "lg", but you can change it
 * 4. We can also say <Container /> that it should be flexible and use all breakpoints with fixed prop
 * 5. This component also has other props like disableGutters to remove paddings from left and right sides, classes (for CSS Api) and sx
 *
 * ------- <Stack /> -------
 *
 * 1. This component allows us to create nice 1-dimensional layouts, like with flex-boxes
 * 2. By default <Stack /> will be flex container with column direction, but you can easily change it with direction prop
 * 3. It of course has all System props, sx and classes props
 * 4. Two most useful props are: spacing - for gutter between elements and divider - for divider between elements
 *
 * ------- <Grid /> -------
 *
 * 1. This component allows us to create 2-dimensional layouts, like with grids (but actually it's using flex-boxes under the hood)
 * 2. <Grid /> component has 2 states: container - to be a grid container, item - to be a grid item, and it can be both at the same time
 * 3. Grid layout consists of 12 columns, and we should structure our layout depending on them (we can manually change amount of columns for specific gird container with columns prop)
 * 4. Every grid item take some space and this space can be different for different breakpoints, just set different breakpoints props for that
 * 5. Of course <Grid /> has all other props from System props, sx and spacing for rows and columns
 * */

interface IItemProps {
  isCentered?: boolean;
  isSquare?: boolean;
  children?: ReactNode;
}

const Item = ({ isCentered, isSquare, children }: IItemProps) => {
  return (
    <Box
      sx={{
        display: isCentered ? 'flex' : 'block',
        justifyContent: 'center',
        alignItems: 'center',
        width: isSquare ? '100px' : 'auto',
        height: '100px',
        color: 'white',
        backgroundColor: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.light',
        },
      }}
    >
      {children}
    </Box>
  );
};

export const MuiLayout = () => {
  return (
    <Container sx={{ marginTop: 2, display: 'flex', flexDirection: 'column' }}>
      <Item isCentered isSquare>
        Box
      </Item>

      <Stack
        mt={2}
        spacing={2}
        direction="row"
        border="1px dashed black"
        p={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Item isSquare />
        <Item isSquare />
        <Item isSquare />
      </Stack>

      <Grid container mt={2} border="1px dashed" p={1} spacing={2}>
        <Grid item lg={4} md={6} xs>
          <Item isCentered>1</Item>
        </Grid>
        <Grid item lg={4} sm={6} xs>
          <Item isCentered>2</Item>
        </Grid>
        <Grid item lg={4} sm={6} xs>
          <Item isCentered>3</Item>
        </Grid>
        <Grid item lg={4} sm={6} xs>
          <Item isCentered>4</Item>
        </Grid>
        <Grid item lg={4} sm={6} xs>
          <Item isCentered>5</Item>
        </Grid>
        <Grid item lg={4} sm={6} xs>
          <Item isCentered>6</Item>
        </Grid>
      </Grid>
    </Container>
  );
};
