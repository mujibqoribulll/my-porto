'use client'

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'


const Links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "contact",
    path: "/contact"
  },
]

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Qori<span className="text-accent">bulll.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-5">
          {
            Links.map((link, index) => (
              <Link href={link?.path} key={index}
              className={`text-xl capitalize hover:text-accent transition-all ${pathname === link?.path && 'border-b-accent border-b-2'}`}
              >
                <h1>
                  {link?.name}
                </h1>
              </Link>
            ))
          }
        </nav>

      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
