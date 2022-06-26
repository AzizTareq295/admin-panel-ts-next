import type { AppProps } from 'next/app'
import WithAuth from 'components/layouts/WithAuth'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'style/globalStyle.css'
import { blueGrey, pink, purple } from '@mui/material/colors';

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
    <ThemeProvider theme={theme}>
      <WithAuth>
        <Component {...pageProps} />
      </WithAuth>
    </ThemeProvider>
  )
}

export default MyApp
