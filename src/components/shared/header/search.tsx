import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


import { SearchIcon } from "lucide-react";

export default function Search() {
  const categories = ["All", "Electronics", "Fashion", "Home", "Books", "Toys"];
  
    return (
     <form action='/search' method='GET' className='flex  items-stretch h-9 '>
           <Select name="category">
  <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none">
    <SelectValue className="placeholder:text-gray-800" placeholder="All" />
  </SelectTrigger>
  <SelectContent position="popper">
    <SelectItem value="all">All</SelectItem>
    {categories.map((category) => (
      <SelectItem key={category} value={category}>
        {category}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

           <Input
  className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full placeholder:text-gray-800"
  placeholder="Search"
  name="q"
  type="search"
/>
            <button
                type='submit'
                className='bg-gray-100 text-black rounded-s-none rounded-e-md h-full px-3 py-2 '
            >
                <SearchIcon className='w-6 h-6' />
            </button>
        </form>
  );
}
