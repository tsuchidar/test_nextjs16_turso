"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="outline"
      disabled={pending}
      className={`${pending && "cursor-not-allowed"} block cursor-pointer`}
    >
      <span className="flex items-center gap-2">
        <Send />
        ポスト
      </span>
    </Button>
  );
}
