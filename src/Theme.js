import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  palette: {
    primary: {
      700: '#d32f2f',
      500: '#f44336',
      100: '#ffcdd2',
      200: '#ef9a9a',
      main: '#ff5252',
      light: '#ff867f',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#000000'
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      primaryMediumEmphasis: 'rgba(0, 0, 0, 0.6)',
      secondary: 'rgba(255, 255, 255, 1)',
      secondaryMediumEmphasis: 'rgba(255, 255, 255, 0.6)'
    }
  },
  typography: {
    subtitle1: { fontWeight: 500 }
  }
});
