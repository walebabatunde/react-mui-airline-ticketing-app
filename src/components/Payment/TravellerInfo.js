import React from 'react';
import { makeStyles, TextField, Grid } from '@material-ui/core';

export const TravellerInfo = ({ fullName, email, onFullNameChange, onEmailChange }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.spacing}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="filled-full-width"
              label="fullName"
              value={fullName}
              fullWidth
              margin="normal"
              variant="filled"
              className={classes.textField}
              InputLabelProps={{ className: classes.inputLabel }}
              onChange={event => onFullNameChange(event.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="filled-full-width"
              label="Email"
              value={email}
              fullWidth
              margin="normal"
              variant="filled"
              className={classes.textField}
              InputLabelProps={{ className: classes.inputLabel }}
              onChange={event => onEmailChange(event.target.value)}
              required
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  spacing: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  textField: {
    marginBottom: theme.spacing(1)
  },
  inputLabel: {
    color: theme.palette.text.primaryMediumEmphasis,
    shrink: true
  }
}));
