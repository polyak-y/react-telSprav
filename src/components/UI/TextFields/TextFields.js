import React from 'react';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({  
  margin: {
    margin: 0,    
  }  
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#00695f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function TextFields (props) {
  const { classes } = props;

  return (
    <div >
      <MuiThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label={props.label}
          id="mui-theme-provider-input"
          onChange={props.onChange}
          value={props.value}
        />
      </MuiThemeProvider>     
    </div>
  );
}

export default withStyles(styles)(TextFields);