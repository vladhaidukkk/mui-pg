import { useState } from 'react';
import { Avatar, Chip, Stack } from '@mui/material';
import { CatchingPokemon, Delete, Notifications, Tag } from '@mui/icons-material';

/*
 * Chip - a compact component which represents input, attribute, additional info, or event an action
 *
 * 1. <Chip /> has required label prop where we pass text
 * 2. <Chip /> has color, variant, size, icon, avatar, props which is used for styling
 * 3. We can make <Chip /> interactive with onClick and onDelete props, onClick make <Chip /> clickable and onDelete prop adds clickable delete icon to the end
 * 4. We can change delete icon with deleteIcon prop
 * */

type TColor = 'primary' | 'secondary' | 'info' | 'warning' | 'error' | 'success' | 'default';

const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const MuiChip = () => {
  const [isDeleted, setDeleted] = useState(false);
  const [tags, setTags] = useState<TColor[]>(['primary', 'secondary', 'info', 'warning', 'error', 'success']);

  const handleDeleteTag = (value: TColor) => () => {
    setTags((prev) => prev.filter((tag) => tag !== value));
  };

  return (
    <Stack spacing={2} p={1}>
      <Stack direction="row" spacing={1}>
        <Chip label="Default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Primary Outlined" color="primary" variant="outlined" />
        <Chip label="Pokemon Go" color="primary" icon={<CatchingPokemon />} />
        <Chip label="John Doerr" color="primary" variant="outlined" avatar={<Avatar>JD</Avatar>} />
        <Chip
          label="Alert"
          color="secondary"
          icon={<Notifications fontSize="small" />}
          onClick={() => alert('Hello, world!')}
        />
        {!isDeleted && (
          <Chip
            label="Delete"
            color="error"
            icon={<Delete fontSize="small" />}
            onClick={() => alert('Press 𝘅 to delete')}
            onDelete={() => setDeleted(true)}
          />
        )}
      </Stack>
      <Stack direction="row" spacing={1}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={capitalize(tag)}
            color={tag}
            size="small"
            icon={<Tag fontSize="small" />}
            onDelete={handleDeleteTag(tag)}
          />
        ))}
      </Stack>
    </Stack>
  );
};
