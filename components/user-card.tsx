import { User } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function UserCard({ user }: { user: User }) {
  // ユーザー名からイニシャルを生成
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="w-full max-w-md">
      <CardContent>
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16 border-2 border-gray-200">
            <AvatarImage
              src={`https://api.dicebear.com/9.x/micah/svg?seed=${user.id}`}
              alt={user.name}
            />
            <AvatarFallback className="text-lg">
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                ゲストユーザー
              </Badge>
              <Badge variant="outline" className="text-xs">
                Active
              </Badge>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  名前:
                </p>
                <h3 className="text-lg font-semibold leading-none">
                  {user.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  メール:
                </p>
                <p className="text-sm break-all">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
