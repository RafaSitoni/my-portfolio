import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light', // ou 'dark' se quiser experimentar depois
    primary: {
      main: '#311F35',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#A67DB8', // tom roxo mais claro para contraste suave
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F9F8FB', // fundo muito claro para suavidade
      paper: '#FFFFFF',   // cartões, containers, etc.
    },
    text: {
      primary: '#2C2C2C', // texto escuro
      secondary: '#6B6B6B', // texto leve
    },
  },
  typography: {
    fontFamily: ['"Nunito", "Open Sans", sans-serif'].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
