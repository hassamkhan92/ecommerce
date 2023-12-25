import { Grid } from '@mui/material';
import { Logo } from '../Icons';

import "./style.scss";

export const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <Logo />
      </Grid>
      <Grid xs={18}>
      </Grid>
    </Grid>
  );
};
