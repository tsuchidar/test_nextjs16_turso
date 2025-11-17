import { User } from "@/types/user";
import { getInitials } from "./get-initials";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function UserAvatar({ user }: { user: User }) {
  return (
    <Avatar className="w-10 h-10">
      <AvatarImage
        src={`https://api.dicebear.com/9.x/micah/svg?seed=${user.id}`}
        alt={user.name}
      />
      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
    </Avatar>
  );
}
