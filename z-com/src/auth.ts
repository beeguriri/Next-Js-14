import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const {
  handlers: { GET, POST },
  auth, //middleware 함수 사용 됨!!
  signIn,
} = NextAuth({
  pages: {
    //내가 만든 페이지 사용
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup'
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: 'POST',
          headers: { 
            "Content-Type": "application/json" 
          },
          body: JSON.stringify({
            id: credentials?.username,
            password: credentials?.password,
          }),
        })
        const user = await res.json()
  
        // If no error and we have user data, return it
        if (res.ok && user) {
          return {
            email: user.id,
            name: user.nickname,
            image: user.image,
            ...user,
          }
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ]
});