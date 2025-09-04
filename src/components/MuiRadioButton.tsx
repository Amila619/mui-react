import {
  Stack,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText
} from "@mui/material";
import { useState } from "react";

export default function MuiRadioButton() {
  const [value, setValue] = useState<string | undefined>("");
  console.log(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Stack spacing={2}>
        <FormControl error>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="female"
              control={<Radio size="medium" color="secondary" />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
    </Stack>
  );
}
