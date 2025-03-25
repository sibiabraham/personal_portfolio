import bcrypt from 'bcryptjs';
import { AuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { CustomUser, Users } from '../types/authType';
import { getModel } from './models';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // const User = (await getModel<Users>('users')) as Model<Users>;
        const User = await getModel<Users>('users');
        const user = await User.findOne({ username: credentials?.username });

        if (!user) {
          throw new Error('No user found with this email');
        }

        const isValidPassword = await bcrypt.compare(credentials!.password, user.password);
        if (!isValidPassword) {
          throw new Error('Invalid credentials');
        }
        const name = `${user.firstName} ${user.lastName}`;

        return {
          id: user._id.toString(),
          name: name,
          email: user.contactEmail,
        };
      },
    }),
  ],
  pages: {
    signIn: '/portfolioadmin',
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = token.user as CustomUser;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
};

export default authOptions;
