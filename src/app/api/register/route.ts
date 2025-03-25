import { getModel } from '@/common/lib/models';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, username, contactEmail, contactNumber, password } =
      await req.json();

    // Basic validation
    if (!firstName || !lastName || !username || !contactEmail || !contactNumber || !password) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    const tableName = 'users';
    const UserModel = await getModel(tableName);

    // Check if user already exists
    const existingUser = await UserModel.findOne({ contactEmail });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'Email already in use' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new UserModel({
      firstName,
      lastName,
      username,
      contactEmail,
      contactNumber,
      password: hashedPassword, // Store hashed password
    });

    await newUser.save();

    return NextResponse.json(
      { success: true, message: 'User registered successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ success: false, message: 'Database error', error }, { status: 500 });
  }
}
