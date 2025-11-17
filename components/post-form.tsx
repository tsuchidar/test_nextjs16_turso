"use client";

import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/submit-button";
import { User } from "@/types/user";
import { Card, CardContent } from "@/components/ui/card";
import { UserAvatar } from "./user/user-avatar";
import { useRef, useState } from "react";
import { createPostAction } from "@/lib/actions";

export function PostForm({ user }: { user: User }) {
  // console.log(user.id);
  const [error, setError] = useState<string | undefined>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = await createPostAction(formData);
    if (!result?.success) {
      setError(result?.error);
    } else {
      setError("");
      // フォームの中身リセット
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <Card>
      <CardContent>
        <form ref={formRef} action={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <UserAvatar user={user} />
            <div className="flex-1 space-y-2">
              <Textarea
                name="content"
                placeholder="投稿する"
                className="min-h-[100px] resize-none"
                maxLength={140}
              />
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  最大140文字
                </span>
                <SubmitButton />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
