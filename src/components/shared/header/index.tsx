import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import Menu from "./menu";
import { menu } from "@/lib/menu";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
      <header className='bg-gray-300 text-black dark:bg-gray-800 dark:text-white shadow-md sticky top-0 z-50'>
            <div className='px-1'>
                <div className='flex items-center justify-between'>
                <div className='flex items-center '>
                    <Link
                    href='/'
                    className='flex items-center header-button font-extrabold text-2xl  '
                    >
                    <Image
                        src={'/logo.png'}
                        width={110}
                        height={40}
                        alt={`logo`}
                    />
                    </Link>
                </div>

                <div className='hidden md:block flex-1 max-w-xl'>
                    <Search />
                </div>
                <Menu />
                </div>
                <div className='md:hidden block py-2'>
                <Search />
                </div>
            </div>
            <div className='flex items-center px-3 mb-[1px]  bg-gray-100'>
                <Button variant="ghost" className="dark header-action flex item-center gap-1 text-base [&_svg]:size-6">
                    <MenuIcon/>
                    All
                </Button>
                {/* <Sidebar categories={allCategories} /> */}
                <div className='flex items-center flex-wrap gap-3 overflow-hidden   max-h-[42px]'>
                {menu.map((menu) => (
                    <Link
                    href={menu.href}
                    key={menu.href}
                    className='header-button !p-2 '
                    >
                    {menu.name}
                    </Link>
                ))}
                </div>
            </div>
            </header>
  );
}