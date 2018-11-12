import { createMuiTheme } from '@material-ui/core/styles';

export default {
  material: createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        main: '#9FBC3C',
      },
      secondary: {
        main: '#2B663C',
      },
    },
    overrides: {
      MuiCard: {
        root: {
          padding: '15px 25px 45px 25px',
          borderRadius: '12px',
          boxShadow: '0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1)',
        },
      },
      MuiButton: {
        root: {
          fontSize: 18,
          boxShadow: '0 3px 5px 2px rgba(159, 188, 60, 0.3)',
          background: 'linear-gradient(45deg, #2b663c 10%, #9fbc3c 90% )',
          borderRadius: 6,
          border: 0,
          color: '#fff',
          height: 42,
          padding: '0 30px',
        },
      },
    },
  }),
  styled: {
    primary: '#9FBC3C',
    secondary: '#2B663C',
  },
};
