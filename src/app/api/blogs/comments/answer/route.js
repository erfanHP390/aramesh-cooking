import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";

export async function POST(req) {
  try {
    connectToDB();

    const body = await req.json();
    const { name, email, city, description, commentID } = body;

    const commentUser = await CommentModel.findOneAndUpdate(
      { _id: commentID },
      {
        $set: {
          hasAnswer: true,
        },
      }
    );

    await CommentModel.create({
      name,
      email,
      city,
      description,
      isAnswer: true,
      isAccept: false,
      hasAnswer: false,
      mainComment: commentID,
    });

    return Response.json(
      { message: "comment was answered is successfully" },
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
