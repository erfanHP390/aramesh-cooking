import connectToDB from "@/configs/db";
import CategoryModel from "@/models/Category";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return Response.json({ message: "name is empty" }, { status: 400 });
    }

    const isExistName = await CategoryModel.findOne({ name });
    if (isExistName) {
      return Response.json(
        { message: "category is already exist" },
        {
          status: 422,
        }
      );
    }

    await CategoryModel.create({ name });
    return Response.json(
      { message: "category is created successfully" },
      { status: 201 }
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
