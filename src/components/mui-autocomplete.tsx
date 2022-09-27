import { useState } from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';

/*
 * Autocomplete - a very powerful component for advanced inputs with options like in <Select /> and suggestions of the options
 *
 * 1. With this component you can realise a lot of functionality
 * 2. You can change appearance of selected options as well as of input and options themselves
 * 3. You can take current value of the input or selected value: inputValue, value
 * 4. One of the main prop is options where we should pass array of strings or array of objects with label property
 * 5. To provide input field we should use renderInput prop
 * 6. To allow input contain not only value from options use freeSolo prop
 * */

interface ISkill {
  id: number;
  label: string;
}

const skills = ['React', 'Vue', 'Angular', 'Next.js', 'Nuxt.js', 'Svelte'];

const objSkills: ISkill[] = skills.map((skill, idx) => ({ id: idx + 1, label: skill }));

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [objValue, setObjValue] = useState<ISkill | null>(null);
  const [multiObjValues, setMultiObjValues] = useState<ISkill[]>([]);

  const handleChangeSkill = (event: any, newValue: string | null) => {
    setValue(newValue);
  };

  const handleChangeObjSkill = (event: any, newValue: ISkill | null) => {
    setObjValue(newValue);
  };

  const handleChangeMultiObjValues = (event: any, newValue: ISkill[]) => {
    setMultiObjValues(newValue);
  };

  return (
    <Stack spacing={2} width={300}>
      <Autocomplete
        value={value}
        onChange={handleChangeSkill}
        renderInput={(params) => <TextField {...params} label="Skill (string)" />}
        options={skills}
        freeSolo
      />

      <Autocomplete
        value={objValue}
        onChange={handleChangeObjSkill}
        renderInput={(params) => <TextField {...params} label="Skill (object)" />}
        options={objSkills}
      />

      <Autocomplete
        multiple
        value={multiObjValues}
        onChange={handleChangeMultiObjValues}
        renderInput={(params) => <TextField {...params} label="Skills (object)" />}
        options={objSkills}
      />
    </Stack>
  );
};
