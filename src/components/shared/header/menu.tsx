import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
   <div className="flex items-center justify-between">
      <nav className="flex items-center space-x-4">
    <Link className="m-2 relative inline-block group" href="/cart">
  <UserIcon className="h-6 w-6 text-gray-500" />
  <span
    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap
               rounded-md bg-black px-2 py-1 text-xs text-white shadow-lg
               opacity-0 invisible
               transition-opacity duration-300
               group-hover:opacity-100 group-hover:visible
               pointer-events-none"
  >
    Sign In
  </span>
</Link>

<Link className="m-2 relative inline-block group" href="/cart">
  <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
  <span
    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap
               rounded-md bg-black px-2 py-1 text-xs text-white shadow-lg
               opacity-0 invisible
               transition-opacity duration-300
               group-hover:opacity-100 group-hover:visible
               pointer-events-none"
  >
    Cart
  </span>
</Link>



      </nav>
    </div>
  );
}