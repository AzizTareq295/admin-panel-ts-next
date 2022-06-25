import type { AppProps } from 'next/app'
import WithAuth from 'components/layouts/WithAuth'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 14,
      h1: {
        fontSize: '.5rem',
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Roboto'), url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <WithAuth>
        <Component {...pageProps} />
      </WithAuth>
    </ThemeProvider>
  )
}

export default MyApp
