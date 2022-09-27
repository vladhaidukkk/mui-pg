import { Avatar, AvatarGroup, Stack } from '@mui/material';

/*
 * Avatar - component to display user avatar
 *
 * 1. We can put inside <Avatar /> text which will be displayed if we did not specify src prop, but if we did not do it and image was incorrect, <Avatar /> will use alt first letter as text
 * 2. We can change <Avatar /> size with sx prop
 * 3. <Avatar /> has 3 variants (circular, rounded, square)
 * 4. We can group avatars with <AvatarGroup /> wrapper component
 * 5. <AvatarGroup /> has max and total props
 * 6. We also can use <Badge /> to attach a badge to an <Avatar />
 * */

const getUserAvatar = (gender: 'men' | 'women') => {
  const index = Math.floor(Math.random() * 99);

  return `https://randomuser.me/api/portraits/${gender}/${index}.jpg`;
};

export const MuiAvatar = () => {
  return (
    <Stack spacing={2} p={2}>
      <Stack direction="row" spacing={2}>
        <Avatar>JD</Avatar>
        <Avatar sx={{ bgcolor: 'primary.main' }}>MT</Avatar>
        <Avatar sx={{ bgcolor: 'warning.main' }}>CR</Avatar>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar src={getUserAvatar('men')} alt="Name" />
        <Avatar src={getUserAvatar('women')} alt="Name" />
        <Avatar src={getUserAvatar('women')} alt="Name" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar sx={{ width: 24, height: 24 }} src={getUserAvatar('men')} alt="Name" />
        <Avatar src={getUserAvatar('women')} alt="Name" />
        <Avatar sx={{ width: 56, height: 56 }} src={getUserAvatar('women')} alt="Name" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Avatar variant="circular" src={getUserAvatar('men')} alt="Name" />
        <Avatar variant="square" src={getUserAvatar('men')} alt="Name" />
        <Avatar variant="rounded" src={getUserAvatar('women')} alt="Name" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <AvatarGroup>
          <Avatar src={getUserAvatar('men')} alt="Name" />
          <Avatar src={getUserAvatar('women')} alt="Name" />
          <Avatar src={getUserAvatar('women')} alt="Name" />
          <Avatar src={getUserAvatar('women')} alt="Name" />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={2}>
        <AvatarGroup max={3}>
          <Avatar src={getUserAvatar('men')} alt="Name" />
          <Avatar src={getUserAvatar('women')} alt="Name" />
          <Avatar src={getUserAvatar('women')} alt="Name" />
          <Avatar src={getUserAvatar('women')} alt="Name" />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};
