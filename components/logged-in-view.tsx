import { User } from "@/types/user";
import PostList from "./post-list";
import PostListLoading from "./post-list-loading";
import { Suspense } from "react";
import { PostForm } from "./post-form";

export default function LoggedInView({ user }: { user: User }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="space-y-6">
        {/* ウェルカムセクション */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">
            タイムラインデモ
          </h1>
          <p className="text-muted-foreground">ようこそ、{user.name}さん</p>
        </div>

        {/* 投稿フォーム */}
        <PostForm user={user} />

        {/* タイムライン */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">タイムライン</h2>
          <Suspense fallback={<PostListLoading />}>
            <PostList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
