import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getModel } from '@/common/lib/models';
import { Users } from '@/common/types/authType';

export async function POST(req: Request) {
  try {
    const { password, confirmPassword, token } = await req.json();

    if (!token || !password || !confirmPassword) {
      return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
    }

    const User = await getModel<Users>('users');
    const user = await User.findOne({ resetPasswordToken: token });

    if (!user) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
    }

    const userPassword = await bcrypt.hash(password, 10);
    const userResetPasswordToken = null;
    const userResetPasswordExpires = null;

    const updatedUser = await User.findOneAndUpdate(
      { resetPasswordToken: token },
      {
        resetPasswordToken: userResetPasswordToken,
        password: userPassword,
        resetPasswordExpires: userResetPasswordExpires,
      },
      { new: true }
    );
    console.log(updatedUser);

    return NextResponse.json({ message: 'Password reset successful' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Server error: ${error}` }, { status: 500 });
  }
}
