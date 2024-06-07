import { dbConfig } from "@/app/utils/dbConfig";
import Agent from "@/app/utils/model/agentModel";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        const { email, password }: any = credentials;
        await dbConfig();

        const user = await Agent.findOne({ email });

        if (user) {
          const checkPassword = await bcrypt.compare(password, user.password);

          if (checkPassword) {
            let myRole = "user";

            if (user.role === "agent") {
              myRole = "agent";

              return {
                ...user,
                name: user.name,
                email: user.email,
                role: myRole,
              };
            } else {
              return {
                ...user,
                name: user.name,
                email: user.email,
                role: myRole,
              };
            }
          } else {
            return null;
          }
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async redirect() {
      return "/";
    },

    async jwt({ user, token }: any) {
      if (user) token.role = user.role;

      return token;
    },

    async session({ session, token }: any) {
      if (session) session.user.role = token.role;

      return session;
    },
  },
};
