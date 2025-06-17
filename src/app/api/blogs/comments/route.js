import connectToDB from "@/configs/db";
import { validateEmail } from "@/utils/auth";
import CommentModel from "@/models/Comment";
import BlogModel from "@/models/Blog";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { name, email, age, description, blogID } = body;

    if (!name  || !email || !description || !blogID || !age) {
      return Response.json(
        { message: "all fields must have something expect score" },
        {
          status: 400,
        }
      );
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return Response.json(
        { message: "email is not valid" },
        {
          status: 422,
        }
      );
    }

    const commentForBlog =await CommentModel.create({
      name,
      email,
      education,
      description,
      blogID,
    });

    const updatedComment = await BlogModel.findOneAndUpdate(
      { _id: blogID },
      {
        $push: {
          comments: commentForBlog._id,
        },
      }
    );


    return Response.json({message: "comment for blog is created successfully"} , {status: 201})

  } catch (err) {
    return Response.json(
      { message: `interval error server ${err}` },
      {
        status: 500,
      }
    );
  }
}
