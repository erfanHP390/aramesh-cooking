import { cookies } from "next/headers";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import {
  generateAccessToken,
  hashPassword,
  validatePhone,
  validateEmail,
  validatePassword,
} from "@/utils/auth";
import { roles } from "@/utils/constants";

export async function POST(req) {
  try {
    await connectToDB();
    
    const body = await req.json();
    const { name, email, phone, password } = body;

    if (!name || !email || !phone || !password) {
      return Response.json(
        { message: "all data must send" },
        { status: 400 }
      );
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return Response.json(
        { message: "email is not valid" },
        { status: 419 }
      );
    }

    const isValidPhone = validatePhone(phone);
    if (!isValidPhone) {
      return Response.json(
        { message: "phone is not valid" },
        { status: 419 }
      );
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      return Response.json(
        { message: "password is not valid" },
        { status: 419 }
      );
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ email }, { phone }],
    });

    if (isUserExist) {
      return Response.json(
        { message: "the email or phone is already exist" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({ name });

    const subscription = Math.floor(Math.random() * 99999);

      const newUser = await UserModel.create({
        name,
        phone,
        email,
        password: hashedPassword,
        role: roles.USER,
        subscription,
      });
      
      cookies().set({
        name: "token",
        value: accessToken,
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
      });

      return Response.json(
        { message: "user signed up successfully" , data: newUser},
        { status: 201 }
      );

  } catch (err) {
    return Response.json(
      { message: `server error: ${err.message}` },
      { status: 500 }
    );
  }
}