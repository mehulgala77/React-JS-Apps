import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';

// Takeaway: Destructure 1 item from an object.
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // Takeaway: Provide user session fron next-auth to entire app
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
