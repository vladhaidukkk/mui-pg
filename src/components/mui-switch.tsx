import { ChangeEvent, useState } from 'react';
import { Stack, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material';

/*
 * Switch - component for toggling between 2 states (like checkbox but better for single variant)
 *
 * 1. <Switch /> is just like <Radio />, <Checkbox /> etc. but have different style
 * */

enum AdvancedSkills {
  React = 'react',
  Vue = 'vue',
  Angular = 'angular',
}

export const MuiSwitch = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [skills, setSkills] = useState<AdvancedSkills[]>([AdvancedSkills.React]);

  const handleToggleDarkMode = (event: ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  const handleChangeAdvancedSkills = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as AdvancedSkills;

    const isExisting = skills.findIndex((skill) => skill === value) !== -1;

    if (isExisting) {
      setSkills(skills.filter((skill) => skill !== value));
    } else {
      setSkills([...skills, value]);
    }
  };

  return (
    <Stack spacing={2} p={2}>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={handleToggleDarkMode} color="secondary" size="small" />}
        label="Dark mode"
      />
      <FormControl>
        <FormLabel>Advanced Skills</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                value={AdvancedSkills.React}
                checked={skills.includes(AdvancedSkills.React)}
                onChange={handleChangeAdvancedSkills}
              />
            }
            label={AdvancedSkills.React.toUpperCase()}
          />
          <FormControlLabel
            control={
              <Switch
                value={AdvancedSkills.Vue}
                checked={skills.includes(AdvancedSkills.Vue)}
                onChange={handleChangeAdvancedSkills}
              />
            }
            label={AdvancedSkills.Vue.toUpperCase()}
          />
          <FormControlLabel
            control={
              <Switch
                value={AdvancedSkills.Angular}
                checked={skills.includes(AdvancedSkills.Angular)}
                onChange={handleChangeAdvancedSkills}
              />
            }
            label={AdvancedSkills.Angular.toUpperCase()}
          />
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
