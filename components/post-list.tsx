import { Card, CardContent } from "./ui/card";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { db } from "@/db";
import { UserAvatar } from "./user/user-avatar";

export default async function PostList() {
  const posts = await db.query.posts.findMany({
    with: {
      user: true,
    },
    orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    limit: 50,
  });

  if (posts.length === 0) {
    return (
      <Card>
        <CardContent>
          <p className="text-muted-foreground">まだ投稿がありません</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent>
            <div className="flex gap-4">
              <UserAvatar user={post.user} />
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{post.user.name}</span>

                  <span className="text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(post.createdAt), {
                      addSuffix: true,
                      locale: ja,
                    })}
                  </span>
                </div>
                <p className="text-sm whitespace-pre-wrap wrap-break-word">
                  {post.content}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
