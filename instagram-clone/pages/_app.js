import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

// Takeaway: Destructure 1 item from an object.
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // Takeaway: Provide user session fron next-auth to entire app
    <SessionProvider session={session}>
      {/* Takeaway: Provide Recoil State to all app. */}
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp
