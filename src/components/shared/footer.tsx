'use client'
import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className='bg-black  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
        
       
      </div>
      <div className='p-4'>
        <div className='flex justify-center  gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>
            Conditions of Use
          </Link>
          <Link href='/page/privacy-policy'>Privacy Notice</Link>
          <Link href='/page/help'>Help</Link>
        </div>
        <div className='flex justify-center text-sm'>
          <p> © Copyright luxoraltd</p>
        </div>
        <div className='mt-8 flex justify-center text-sm text-gray-400'>
          Dhanmondi, Dhaka, Bangladesh
        </div>
      </div>
    </footer>
    )
}