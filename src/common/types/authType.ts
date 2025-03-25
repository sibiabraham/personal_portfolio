export type CustomUser = {
  id: string;
  name: string;
  email: string;
};
export type Users = Document & {
  firstName: string;
  lastName: string;
  username: string;
  contactEmail: string;
  contactNumber: string;
  password: string;
  resetPasswordToken?: string | null;
  resetPasswordExpires: Date | null;
};
