import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function MuiCheckBox() {
  const [acceptTnC, setAceeptTnC] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAceeptTnC(e.target.checked);
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
        setSkills(skills.filter(skill => skill !==  e.target.value))
    }
  };

  console.log(acceptTnC);
  console.log(skills);
  

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnC} color="secondary" size="large" onChange={handleChange} />}
        />
      </Box>
      {/* Icons as a Check Box */}
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      {/* Using a checkbox group */}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                  value="html"
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                  value="css"
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                  value="javascript"
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
