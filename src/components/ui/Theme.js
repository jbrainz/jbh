import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#2A9E00';
const arcOrange = '#FF6900';
const arcGreen = '#2A9E00';
export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcOrange}`,
    },
    secondary: {
      main: `${arcGreen}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem',
    },
    book: {
      fontSize: '1rem',
      textTransform: 'none',
    },
  },
});
