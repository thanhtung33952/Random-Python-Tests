import { createTheme } from '@material-ui/core/styles';
// A theme with custom primary and secondary color.
// It's optional.
const theme = createTheme({
  palette: {
    primary: {
      light: '#333649',
      main: '#4A4E69',
      dark: '#6e7187'
    },
    secondary: {
      light: '#4bbf33',
      main: '#1EB001',
      dark: '#157b00'
    },
    grayBlue: {
      light: '#5d677a',
      main: '#8694AF',
      dark: '#9ea9bf'
    },
    grey: {
      light: '#8d8d8d',
      main: '#717171',
      dark: '#4f4f4f',
      pale: '#D5D5D5'
    },
    pink: {
      light: '#ff8484',
      main: '#ff6666',
      dark: '#b24747'
    },
    green: {
      light: '#5bad84',
      main: '#339966',
      dark: '#236b47'
    },
    indigo: {
      light: '#8484ad',
      main: '#666699',
      dark: '#47476b'
    },
    // màu tím
    purple: {
      light: '#ad5c84',
      main: '#993466',
      dark: '#6b2447'
    },
    // màu xanh đậm
    greenDark: {
      light: '#506261',
      main: '#253b3a',
      dark: '#192928'
    },
    // màu vàng
    yellow: {
      light: '#b26600',
      main: '#FF9300',
      dark: '#ffa833'
    },
    // màu đỏ
    redColor: {
      light: '#ff6666',
      main: '#ff0000',
      dark: '#f44336'
    },
    // màu xanh dương
    blue: {
      light: '#4ca4fb',
      main: '#1890ff',
      dark: '#3f51b5'
    },
    white: {
      main: '#fff',
    },
    black: {
      main: '#000',
    }
  },
  typography: {
    useNextVariants: true
  },
});

export default theme;
