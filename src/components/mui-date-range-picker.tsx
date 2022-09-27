import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro';

/*
 * DateRangePicker - a component from Mui X Pro (need to pay) that allow us to input range of dates
 *
 * 1. It's very similar to simple Date & Time Pickers but has more complicated data types and renderInput prop
 * 2. With this component you can do all the same as with Date & Time Pickers
 * */

export const MuiDateRangePicker = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange<Date>>([null, null]);

  return (
    <Box p={2}>
      <DateRangePicker
        value={selectedDateRange}
        onChange={(newDateRange) => setSelectedDateRange(newDateRange)}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}>
              <Typography>to</Typography>
            </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
};
