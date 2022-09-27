import { Stack, Breadcrumbs, Link, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

/*
 * Breadcrumbs - a component which contains a list of links and represents the hierarchy of a user location on the webpage
 *
 * 1. <Breadcrumbs /> is just a wrapper which manipulate the content inside
 * 2. Inside <Breadcrumbs /> we can put <Link />'s or <Typography />'s
 * 3. <Breadcrumbs /> has some useful props: separator, maxItems, itemsBeforeCollapse, itemsAfterCollapse
 * */

export const MuiBreadcrumbs = () => {
  return (
    <Stack p={4} spacing={4}>
      <Breadcrumbs>
        <Link href="/">Home</Link>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/marketplace/products">Products</Link>
        <Link href="/marketplace/products/new">New</Link>
        <Typography>Dresses</Typography>
      </Breadcrumbs>

      <Breadcrumbs separator={<NavigateNext />}>
        <Link href="/">Home</Link>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/marketplace/products">Products</Link>
        <Link href="/marketplace/products/new">New</Link>
        <Typography>Dresses</Typography>
      </Breadcrumbs>

      <Breadcrumbs separator="-" maxItems={3} itemsAfterCollapse={2}>
        <Link href="/">Home</Link>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/marketplace/products">Products</Link>
        <Link href="/marketplace/products/new">New</Link>
        <Typography>Dresses</Typography>
      </Breadcrumbs>
    </Stack>
  );
};
