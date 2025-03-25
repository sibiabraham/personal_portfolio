import { getModel } from '@/common/lib/models';
import { Users } from '@/common/types/authType';
import crypto from 'crypto';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { contactEmail } = await req.json();

    if (!contactEmail) {
      return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
    }

    const UserModel = await getModel<Users>('users');
    const user = await UserModel.findOne({ contactEmail });

    if (!user) {
      return NextResponse.json({ success: false, message: 'Email not found' }, { status: 404 });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const userResetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour expiration

    const updatedUser = await UserModel.findOneAndUpdate(
      { contactEmail },
      {
        resetPasswordToken: resetToken,
        resetPasswordExpires: userResetPasswordExpires,
      },
      { new: true }
    );
    console.log(updatedUser);

    const resetLink = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/reset-password?token=${resetToken}`;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: user.contactEmail,
      from: process.env.EMAIL_USER,
      subject: 'Password Reset Request',
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    });

    return NextResponse.json({ success: true, message: 'Reset link sent to email' });
  } catch (error) {
    console.error('Forgot Password Error:', error);
    return NextResponse.json({ success: false, message: 'Something went wrong' }, { status: 500 });
  }
}
