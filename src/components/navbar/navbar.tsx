import { HomeIcon, GamepadIcon, PrizeIcon, RouteIcon, FaceHappyIcon } from "@/components"
import {cn} from "@/helpers/cn"
import { NavbarProps } from "./types";
import { NavbarList } from "./NavbarList";
import { NavbarListItemLink } from "./NavbarListItemLink";
import { NavbarListItemButton } from "./NavbarListItemButton";

export const Navbar = ({className, ...props}: NavbarProps) => {
    return (
        <nav className={cn("flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300", className)} {...props}>
          <div className="flex items-center justify-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwjxGP9h9v1FZXW37MhhHsR0_u_rR0UN7Dg&s" 
              alt="Logo EmersonBrogaDev" 
              className="w-auto h-20 p-2"
            />
          </div>
          <NavbarList className={"flex-grow"}>
              <NavbarListItemLink href="/">
                <HomeIcon className="w-4 h-4"/>Home
              </NavbarListItemLink>
              <NavbarListItemLink href="/games">
                <GamepadIcon className="w-4 h-4"/>Games
              </NavbarListItemLink>
              <NavbarListItemLink href="/top-10">
                <PrizeIcon className="w-4 h-4"/>Top 10
              </NavbarListItemLink>
              <NavbarListItemLink href="/walkthroughs">
                <RouteIcon className="w-4 h-4"/>Walkthroughs
              </NavbarListItemLink>
            </NavbarList>
          <NavbarList>
            <NavbarListItemLink href="/user">
              <FaceHappyIcon className="w-4 h-4"/>User
              </NavbarListItemLink>
          </NavbarList>
        </nav>
      );
  };