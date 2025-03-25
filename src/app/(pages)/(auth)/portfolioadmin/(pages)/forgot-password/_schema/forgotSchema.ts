import { z } from 'zod';

const forgotSchema = z.object({
  contactEmail: z.string().email('Invalid email address').min(1, 'Email is required'),
});

export type ForgotForm = z.infer<typeof forgotSchema>;

export default forgotSchema;
