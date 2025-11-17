"use server";

import { posts } from "@/db/schemas/posts";
import { db } from "@/db";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import z from "zod";
import { verifySession } from "./session";

export async function createPostAction(formData: FormData) {
  //ServerActions
  const session = await verifySession();
  const user = session?.user;

  if (!user) {
    throw new Error("ログインしてください");
  }
  // console.log("🐻🐻🐻" + user.id);
  try {
    const content = formData.get("content") as string;
    // zodでエラー文を制御
    const postTextSchema = z
      .string()
      .min(1, "投稿内容を入力してください")
      .max(140, "140文字以内で投稿してください");

    const validatedResult = postTextSchema.parse(content);

    await db.insert(posts).values({
      id: nanoid(),
      userId: user.id,
      content: validatedResult,
    });

    revalidatePath("/");
    return { error: undefined, success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.issues.map((e) => e.message).join(", "),
      };
    } else if (error instanceof Error) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "予期しないエラーが発生しました" };
    }
  }
}
