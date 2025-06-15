import connectToDB from "@/configs/db";
import { validateEmail, validatePhone } from "@/utils/auth";
import ContactModel from "@/models/Contact";

export async function POST(req) {
  connectToDB();

  try {
    const body = await req.json();
    const { name, email, phone, department, content } = body;

    if (!name || !department || !content) {
      return Response.json(
        { message: "every inputs must filled" },
        {
          status: 400,
        }
      );
    }

    if (email) {
      const isValidEmail = validateEmail(email);

      if (!isValidEmail) {
        return Response.json(
          { message: "email  is not valid" },
          {
            status: 422,
          }
        );
      }
    }

    if (phone) {
      const isValidPhone = validatePhone(phone);

      if (!isValidPhone) {
        return Response.json(
          { message: "phone  is not valid" },
          {
            status: 422,
          }
        );
      }
    }

    await ContactModel.create({ name, email, phone, department, content });
    return Response.json(
      { message: "message is created successfully" },
      {
        status: 201,
      }
    );
  } catch (err) {
    return Response.json(
      { message: `interval error server ${err}` },
      {
        status: 500,
      }
    );
  }
}
