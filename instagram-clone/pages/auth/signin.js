/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getProviders, signIn as signIntoProvider } from 'next-auth/react';
import Header from '../../components/Header';

function signIn({ providers }) {
  return (
    <>
      {/* Takeaway: Custom signin page */}
      <Header />

      <div className='flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center'>
        <img className='w-80' src="https://links.papareact.com/ocw" alt="insta-logo" />
        <p className='font-xs italic'>This is not a REAL app, it is built only for educational purposes only.</p>

        <div className='mt-40'>
          {/* Takeaway: Put OAuth provider buttons here */}
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button 
                className='p-3 bg-blue-500 rounded-lg text-white'
                // Takeway: Signin with the OAuth provider like Google and pass callback url.
                onClick={() => signIntoProvider(provider.id, {
                  callbackUrl: '/'
                })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers
    }
  }
};

export default signIn