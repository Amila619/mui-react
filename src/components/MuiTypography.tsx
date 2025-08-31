import { Typography } from "@mui/material";

export default function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>

      {/* bottom margin with gutterBottom and h1 tag with h4 attributes */}
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>

      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      {/* Body 1 is the default variant */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
        provident excepturi autem, aut, nihil facilis rerum quisquam sapiente
        doloremque tempora odit commodi totam sed incidunt quia quod assumenda
        quis! Odio. Itaque repellendus illum illo eaque porro voluptatum ab eos
        quisquam qui! Et, voluptate dolorem sint ullam similique ipsam officiis
        repudiandae laudantium natus praesentium quibusdam mollitia minus. Neque
        magni ut adipisci.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
        provident excepturi autem, aut, nihil facilis rerum quisquam sapiente
        doloremque tempora odit commodi totam sed incidunt quia quod assumenda
        quis! Odio. Itaque repellendus illum illo eaque porro voluptatum ab eos
        quisquam qui! Et, voluptate dolorem sint ullam similique ipsam officiis
        repudiandae laudantium natus praesentium quibusdam mollitia minus. Neque
        magni ut adipisci.
      </Typography>
    </div>
  );
}
