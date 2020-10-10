import AuthProvider from '../firebase/auth';
import { ThemeProvider } from '@chakra-ui/core';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
