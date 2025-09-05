import { Stack, Rating, styled } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

export default function MuiRating() {
  const [value, setValue] = useState<number | null>(null);
  const handleChange = (e: React.SyntheticEvent, newValue: number | null) => {
    setValue(newValue);
  };

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={handleChange} precision={0.5} highlightSelectedOnly/>
      <Rating value={3} precision={0.5} readOnly/>
      <StyledRating
        value={value}
        onChange={handleChange}
        precision={0.5}
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? "s" : ""}`
        }
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        size="large"
      />
    </Stack>
  );
}
