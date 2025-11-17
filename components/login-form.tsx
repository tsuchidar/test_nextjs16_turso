"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-xl font-bold">ようこそ</h1>
          <FieldDescription>
            ゲストでログインして利用を開始できます
          </FieldDescription>
        </div>
        <Field>
          <Button
            onClick={(e) => {
              e.preventDefault();
              authClient.signIn.anonymous().then(() => {
                router.push("/");
              });
            }}
            type="button"
            className="w-full cursor-pointer"
          >
            ゲストログイン
          </Button>
        </Field>
      </FieldGroup>
    </div>
  );
}
