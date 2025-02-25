"use client";

import { useCookies } from "next-client-cookies";
import React from "react";
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserType } from "@/lib/types";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import SVGCircle from "@/components/loading-button/svg-circle";

function UserMenu() {
  const cookies = useCookies();
  const router = useRouter();

  const user: UserType | null = React.useMemo(() => {
    const userCookie = cookies.get("user");
    try {
      const userObj = JSON.parse(userCookie ?? "");

      return userObj as UserType;
    } catch {
      return null;
    }
  }, []);

  const [loading, setLoading] = React.useState(false);

  const handleLogout = React.useCallback(async () => {
    setLoading(true);
    try {
      await axios.post("/api/auth/logout", { username: user?.username });
      cookies.remove("user");
      router.push("/login");
      router.refresh();
    } catch (e) {
      const error = e as AxiosError;
      const data = error?.response?.data as { error: string };
      toast.error(data.error ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [cookies, router, user]);

  return user ? (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.name}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          side={"right"}
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Sparkles />
              Upgrade to Pro
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            {loading ? <SVGCircle /> : <LogOut />}
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : null;
}

export default UserMenu;
