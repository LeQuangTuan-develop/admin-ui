"use client"

import { LogOut, Moon, Settings, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";
// import { Button } from "./ui/button";

const NavBar = () => {
  // const { toggleSidebar } = useSidebar();

  return (
    <nav className="flex p-4 items-center justify-between">
      {/* LEFT */}
      <SidebarTrigger />
      {/* <Button variant={"outline"} onClick={toggleSidebar}>
        Open sidebar
      </Button> */}
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/settings">Dashboard</Link>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <User className="h-4 w-4 mr-2" />
                Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default NavBar;
