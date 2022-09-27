import { TextField, Box, MenuItem, FormControl, InputLabel, Chip, SelectChangeEvent, Select } from '@mui/material';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

/*
 * TextField Select, Select - we can use simple <TextField /> for select or native <Select />
 *
 * 1. Both variants are good, and you can use what you want
 * 2. You can create really awesome variants because it's really powerful, but it's not very easy to do
 * */

export const MuiSelect = () => {
  const [isLoading, setLoading] = useState(false);
  const [countriesList, setCountriesList] = useState<any[]>();

  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleSelectMulti = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedCountries(typeof value === 'string' ? value.split(',') : value);
  };

  const handleNativeSelect = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value);
  };

  const handleNativeSelectMulti = (event: SelectChangeEvent<typeof selectedCountries>) => {
    const value = event.target.value;
    setSelectedCountries(typeof value === 'string' ? value.split(',') : value);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);

        const resp = await fetch('https://restcountries.com/v3.1/all');
        const data = await resp.json();

        setCountriesList(data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const countriesCollection = useMemo(() => {
    return !isLoading && countriesList ? (
      countriesList.map((country) => (
        <MenuItem key={country.cca2} value={country.cca2}>
          {country.name.common}
        </MenuItem>
      ))
    ) : (
      <MenuItem disabled={isLoading}>Loading...</MenuItem>
    );
  }, [countriesList]);

  return (
    <Box width={350}>
      <TextField label="Select country" select fullWidth value={selectedCountry} onChange={handleSelect}>
        {countriesCollection}
      </TextField>

      <TextField
        label="Select countries"
        select
        margin="normal"
        fullWidth
        value={selectedCountries}
        onChange={handleSelectMulti}
        SelectProps={{
          multiple: true,
          MenuProps: {
            PaperProps: {
              sx: {
                maxHeight: 300,
              },
            },
          },
        }}
      >
        {countriesCollection}
      </TextField>

      <Select value={selectedCountry} onChange={handleNativeSelect} fullWidth>
        {countriesCollection}
      </Select>

      <FormControl fullWidth margin="normal">
        <InputLabel id="demo-simple-select-label">Native Select country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Native Select country"
          value={selectedCountry}
          onChange={handleNativeSelect}
        >
          {countriesCollection}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="demo-simple-select-label-multi">Native Select Multi country</InputLabel>
        <Select
          labelId="demo-simple-select-label-multi"
          label="Native Select Multi country"
          multiple
          value={selectedCountries}
          onChange={handleNativeSelectMulti}
          renderValue={() => (
            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5, overflowX: 'scroll' }}>
              {selectedCountries.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 48 * 4.5 + 8,
              },
            },
          }}
        >
          {countriesCollection}
        </Select>
      </FormControl>
    </Box>
  );
};
