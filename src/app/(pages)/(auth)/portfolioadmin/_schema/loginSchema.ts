import { z } from 'zod';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(8, 'Password is required'),
});

export type LoginForm = z.infer<typeof loginSchema>;

export default loginSchema;
