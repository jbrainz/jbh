import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#6C63FF';
const arcOrange = '#FF6900';
const arcGreen = '#2A9E00';
const arcGray = '#868686';
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
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      color: `${arcBlue}`,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: `${arcOrange}`,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: `${arcBlue}`,
      fontWeight: '700',
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: '300',
      color: `${arcGray}`,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    body2: {
      fontSize: '16px',
      fontWeight: '300',
      fontFamily: 'Gentona',
      color: '#00000099',
      lineHeight: '24px',
      minHeight: '150px',
    },
    subtitle2: {
      color: '#fff',
      fontSize: '1.25rem',
      fontWeight: '300',
    },
  },
});
