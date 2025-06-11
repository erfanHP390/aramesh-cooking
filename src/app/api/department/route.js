import connectToDB from "@/configs/db";
import DepartmentModel from "@/models/Department";

export async function POST(req) {
  connectToDB();
  try {
    const body = await req.json();
    const { title } = body;

    if (!title) {
      return Response.json(
        { message: "title is empty" },
        {
          status: 400,
        }
      );
    }

    const isDepartment = await DepartmentModel.findOne({ title });
    if (isDepartment) {
      return Response.json(
        { message: "email is already exist" },
        {
          status: 409,
        }
      );
    }

    await DepartmentModel.create({ title });
    return Response.json(
      { message: "department is created successfully" },
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
