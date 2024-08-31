import { HomeIcon, GamepadIcon, PrizeIcon, RouteIcon, FaceHappyIcon } from "@/components"
import {cn} from "@/helpers/cn"

type NavbarProps = React.ComponentProps<"nav">
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarListItemProps = React.ComponentProps<"li">;
C

const NavbarList = ({children, className, ...props }: NavbarListProps) => {
  return <ul className={cn("my-4 border-t border-indigo-400/20 border-indigo-400", className)} {...props}>
    {children}
  </ul>
};

const NavbarListItem = ({children, className, ...props}: NavbarListItemProps) => {
  return (<li className={cn("my-2 rounded p-2 bg-transparent hover:bg-indigo-400/40 hover:text-slate-100 cursor-pointer flex gap-2 items-center", 
  className)} {...props}>
    {children}
  </li>
  );
};



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
              <NavbarListItem>
                <HomeIcon className="w-4 h-4"/>Home
              </NavbarListItem>
            <NavbarListItem>
              <GamepadIcon className="w-4 h-4"/>Games
            </NavbarListItem>
            <NavbarListItem>
            <PrizeIcon className="w-4 h-4"/>Top 10
            </NavbarListItem>
            <NavbarListItem>
            <RouteIcon className="w-4 h-4"/>Walkthroughs
            </NavbarListItem>
          </NavbarList>
          <NavbarList>
            <NavbarListItem>
            <FaceHappyIcon className="w-4 h-4"/>User
            </NavbarListItem>
          </NavbarList>
      </nav>
    )
}