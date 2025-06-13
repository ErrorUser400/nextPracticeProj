import Image from "next/image";
import Link from "next/link";

import DropDown from "./DropDown";

export interface MenuItem {
    title: string;
    route?: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        title: "Home",
        route: "/",
    },

    {
        title: "Pages",
        children: [
            {
                title: "Rock Paper Scissor",
                route: "/pages/RockPaperScissor",
            },
            {
                title: "Stop Watch",
                route: "/pages/StopWatch",
            },
            {
                title: "Dice",
                route: "/pages/Dice",
            }
        ]
    }

]

function NavLayout() {
  return (
      <header className="flex gap-10 items-center bg-zinc-800 py-4 px-2">
          <Link href="/" target="_blank">
              <Image src="/favicon.ico" width={50} height={50} alt="logo" />
          </Link>
          <div className="flex gap-8 items-center text-white">
              {
                  menuItems.map((item, index:number) => {
                      return item.hasOwnProperty("children") ?
                          (
                              <DropDown key={index} item={item} />
                          ) :
                          (
                              <Link key={index} className="hover:text-blue-500" href={"/" + item?.route || ""}>
                                  {item.title}
                              </Link>
                          )
                  })
              }
          </div>
      </header>
  );
}

export default NavLayout;