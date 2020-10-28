import { makeStyles } from '@material-ui/core/styles';
import Theme from './Theme';

export const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...Theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '1.25em',
    },
  },
  logo: {
    height: '7em',
    [theme.breakpoints.down('md')]: {
      height: '6em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5em',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    color: '#000000',
  },
  button: {
    ...theme.typography.book,
    borderBottomLeftRadius: '10px',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '15px',
    color: '#fff',
    marginLeft: '50px',
    marginRight: '25px',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menu: {
    backgroundColor: theme.palette.common.orange,
    color: '#fff',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  menuStyle: {
    height: '50px',
    width: '50px',
    color: '#adb5bd',
  },
  iconDrawer: {
    '&:hover': { backgroundColor: 'transparent' },
    marginLeft: 'auto',
  },
  drawer: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: '#fff',
    opacity: 0.6,
    '&:hover': { opacity: 1 },
  },
  bookList: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': { backgroundColor: '#2A9E00' },
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));
