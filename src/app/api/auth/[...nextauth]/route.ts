import NextAuth from 'next-auth';
import authOptions from '@/common/lib/auth';

const handler = NextAuth(authOptions);

// Export handlers dynamically using an object
export { handler as GET, handler as POST };
