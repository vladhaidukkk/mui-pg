import { ChangeEvent, useState } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Stack } from '@mui/material';
import { Bookmark, BookmarkBorder } from '@mui/icons-material';

/*
 * Checkbox - component for toggling some options
 *
 * 1. Here is the same situation as with other form components (not <TextField />), we have to manually create form field structure
 * 2. <Checkbox /> can be used as single element or in a group of few elements
 *
 * - Low level form components:
 *    a. <FormGroup /> - holder for a group of form items (like <RadioGroup /> but more general)
 * */

enum Skills {
  Html = 'html',
  Css = 'css',
  Js = 'javascript',
  Json = 'json',
}

export const MuiCheckbox = () => {
  const [isUserRemembered, setUserRemembered] = useState(false);
  const [skills, setSkills] = useState<Skills[]>([]);

  const handleToggleUserRemembered = () => {
    setUserRemembered((prev) => !prev);
  };

  const handleToggleSkill = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as Skills;

    const isExisting = skills.findIndex((skill) => skill === value) !== -1;

    if (isExisting) {
      setSkills((prev) => prev.filter((skill) => skill !== value));
    } else {
      setSkills((prev) => [...prev, value]);
    }
  };

  return (
    <Stack spacing={2}>
      <Box>
        <FormControlLabel
          control={
            <Checkbox color="warning" size="small" onChange={handleToggleUserRemembered} checked={isUserRemembered} />
          }
          label="Remember account"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleToggleUserRemembered}
              checked={isUserRemembered}
              color="warning"
              icon={<BookmarkBorder />}
              checkedIcon={<Bookmark />}
            />
          }
          label="Remember account with icon"
          labelPlacement="bottom"
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Your skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox onChange={handleToggleSkill} checked={skills.includes(Skills.Html)} value={Skills.Html} />
              }
              label={Skills.Html.toUpperCase()}
            />
            <FormControlLabel
              control={
                <Checkbox onChange={handleToggleSkill} checked={skills.includes(Skills.Css)} value={Skills.Css} />
              }
              label={Skills.Css.toUpperCase()}
            />
            <FormControlLabel
              control={<Checkbox onChange={handleToggleSkill} checked={skills.includes(Skills.Js)} value={Skills.Js} />}
              label={Skills.Js.toUpperCase()}
            />
            <FormControlLabel
              control={
                <Checkbox onChange={handleToggleSkill} checked={skills.includes(Skills.Json)} value={Skills.Json} />
              }
              label={Skills.Json.toUpperCase()}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Stack>
  );
};
