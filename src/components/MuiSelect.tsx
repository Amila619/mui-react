import { Stack, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export default function MuiSelect() {
  const [country, setCountry] = useState<string | undefined>("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCountry(e.target.value);
  };

  const handleChange_ = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setCountries(typeof value === "string" ? value.split(',') : value);
  };

  console.log(country);
  console.log(countries);

  return (
    <Stack width="250px" spacing={4}>
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        helperText="Please select your country"
        fullWidth
      >
        <MenuItem value="SR">Srilanka</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>

      {/* Select multiple options at once */}
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange_}
        helperText="Please select your country"
        fullWidth
        color="secondary"
        slotProps={{
          select: {
            multiple: true,
          },
        }}
      >
        <MenuItem value="SR">Srilanka</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>
    </Stack>
  );
}
