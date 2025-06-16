import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  connectToDB();
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const description = formData.get("description");
    const category = formData.get("category");
    const img = formData.get("img");

    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;
    const imgPath = path.join(process.cwd(), "public/uploads/" + filename);

    await writeFile(imgPath, buffer);

    if (!name || !description || !category || !img) {
      return Response.json(
        { message: "all fields must have something" },
        {
          status: 400,
        }
      );
    }

    if (!img) {
      return Response.json(
        { message: "product has not image" },
        {
          status: 400,
        }
      );
    }

    await ProductModel.create({
      name,
      description,
      category,
      img: `http://localhost:3000/uploads/${filename}`,
    });

    return Response.json(
      { message: "product is created successfully" },
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
