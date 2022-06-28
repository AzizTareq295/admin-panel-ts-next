import type { AppProps } from 'next/app'
import WithAuth from 'components/layouts/WithAuth'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey, pink, purple } from '@mui/material/colors';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import 'style/globalStyle.css'
import { CssBaseline } from '@mui/material';

const emotionCache = createCache({ key: 'css', prepend: true });

function MyApp({ Component, pageProps }: AppProps) {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[900]
      },
      secondary: {
        main: blueGrey['A200']
      },
      warning: {
        main: pink[900]
      }
    }
  });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WithAuth>
          <Component {...pageProps} />
        </WithAuth>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
