import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, FormHelperText, Box } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

/*
 * Radio, RadioGroup - components for single radio btn or group of them (in most cases group)
 *
 * 1. With <Radio /> as well as with <Select /> we have to use all those low level form components to create accessible and nice looking form field
 * 2. Actually we can use just <Radio /> but it's not accessible
 * 3. Of course <Radio /> has size, color, disabled, icon and other common props
 * 4. <RadioGroup /> has row prop to show radio btns in a row
 *
 * - Low level form components:
 *    a. <FormControl /> - holder for a form field
 *    b. <FormLabel /> - label for form field
 *    c. <FormControlLabel /> - label for single item of form field
 *    d. <FormHelperText /> - holder of form field message
 * */

enum Genders {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export const MuiRadio = () => {
  const [gender, setGender] = useState<Genders>(Genders.Male);
  const [isValidGender, setvalidGender] = useState(true);

  useEffect(() => {
    setvalidGender(gender !== Genders.Other);
  }, [gender]);

  const handleChangeGender = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value as Genders);
  };

  return (
    <Box>
      <FormControl error={!isValidGender}>
        <FormLabel id="some-form-control-label" color="success">
          Gender
        </FormLabel>
        <RadioGroup
          aria-labelledby="some-form-control-label"
          name="gender"
          value={gender}
          onChange={handleChangeGender}
          row
        >
          <FormControlLabel control={<Radio color="secondary" />} label="Male" value={Genders.Male} />
          <FormControlLabel control={<Radio size="small" />} label="Female" value={Genders.Female} />
          <FormControlLabel control={<Radio color="error" />} label="Other" value={Genders.Other} />
        </RadioGroup>
        {!isValidGender && <FormHelperText>Gender is invalid</FormHelperText>}
      </FormControl>
    </Box>
  );
};
