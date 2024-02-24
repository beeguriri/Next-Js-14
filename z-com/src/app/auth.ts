import NextAuth from "next-auth"

export const {
  handlers: { GET, POST },
  auth, //middleware 함수 사용 됨!!
  signIn,
} = NextAuth({
  // Configure one or more authentication providers
  providers: [

  ]
});