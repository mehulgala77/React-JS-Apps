import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  // Takeaway: To customize Firebase default login page
  // theme: {
  //   logo: 'https://links.papareact.com/sq0',
  //   brandColor: '#f13287',
  //   colorScheme: 'auto'
  // }

  // Takeaway: Add a custom page for firebase authentication
  pages: {
    signIn: '/auth/signin'
  },

  // Takeaway: Enhance user session object we get back from nextJS. 
  // Add new fields to the user session. 
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name.split(' ').join('').toLowerCase();
      session.user.uid = token.sub;
      return session;
    }
  }
})