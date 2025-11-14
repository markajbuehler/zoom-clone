"use client"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import React from "react"
import Link from "next/link"
import { SheetClose } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image 
          src='/icons/hamburger.svg'
          width={36}
          height={36}
          alt="hamburger-icon"
          className="cursor-pointer sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none bg-blue-950">
        <Link href='/' className='flex items-center gap-1'> 
          <Image 
            src='/icons/logo.svg'
            width={32}
            height={32}
            alt='Logo'
            className='max-sm:size-10'
          /> 
          <p className='text-[26px] font-extrabold text-white'>
              Zoom Clone
            </p>
        </Link>
        <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gaü-6 pt-16 text-white">
               {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose key={link.route} asChild>
                      <Link 
                        href={link.route}
                        key={link.label}
                        className={cn('flex gap-4 rounded-lg p-4 items-center w-full max-w-60', {
                          'bg-amber-500': isActive,
                        })}
                      > 
                        <Image 
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}  
                        /> 
                        <p className='font-semibold'> 
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
              })}

            </section>

          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

