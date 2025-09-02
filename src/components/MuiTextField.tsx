import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

export default function MuiTextField() {
  const [value, setValue] = useState<string | undefined>();

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        {/* outlined is the default variant */}
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="standard" />
        <TextField label="name" variant="filled" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        {/* inputProps is depricated */}
        {/* <TextField label="Read Only" inputProps={{readOnly : true}} /> */}
        <TextField
          label="Read Only"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
        <TextField label="Form Input disabled" disabled />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Weight"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Passoword"
          type="password"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            },
          }}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
      </Stack>
    </Stack>
  );
}
