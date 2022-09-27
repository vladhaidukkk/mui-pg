import { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';

/*
 * Date & Time Picker - a component from Mui-X that allows to pick a date or time or even both at the same time
 *
 * 1. We have 3 variants of components: <DatePicker />, <TimePicker /> and <DateTimePicker />
 * 2. To control input state use value and onChange props as always
 * 3. We should always specify renderItem - a component for which out date & time picker will add a wrapper
 * 4. We should add global <LocalizationProvider /> and DateAdapter for it as a prop, and only with it out pickers will work (will adapt time to timezones)
 * 5. As an addition to <LocalizationProvider /> and DateAdapter we must download date-fns and @date-io/date-fns packages which are used under the hood
 * */

export const MuiDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateAndTime, setSelectedDateAndTime] = useState<Date | null>(null);

  return (
    <Stack direction="row" spacing={3} p={2}>
      <DatePicker
        label="Date Picker"
        onChange={(newDate) => setSelectedDate(newDate)}
        value={selectedDate}
        renderInput={(props) => <TextField {...props} />}
      />

      <TimePicker
        label="Time Picker"
        onChange={(newTime) => setSelectedTime(newTime)}
        value={selectedTime}
        renderInput={(props) => <TextField {...props} />}
      />

      <DateTimePicker
        label="Date & Time Picker"
        onChange={(newDateAndTime) => setSelectedDateAndTime(newDateAndTime)}
        value={selectedDateAndTime}
        renderInput={(props) => <TextField {...props} />}
      />
    </Stack>
  );
};
