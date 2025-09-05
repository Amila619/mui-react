import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export default function MuiSwitch() {
  // Switches toggles the state of a single setting ON or OFF
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  console.log(checked);

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch onChange={handleChange} />}
      />
    </Box>
  );
}
