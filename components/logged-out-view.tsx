import Link from "next/link";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

export default function LoggedOutView() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          TursoでのSNSデモアプリ
        </h1>
        <p className="text-xl text-muted-foreground">
          ゲストログインで、投稿テストができます
        </p>
        <div className="pt-4">
          <Button asChild size="lg">
            <Link href="/login">
              <LogIn className="mr-2 h-5 w-5" />
              ログイン
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
