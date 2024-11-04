"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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

const Nav = () => {
    const pathname = usePathname()
    return (
        <nav className="flex gap-8">
            {
                Links.map((link, index) => (
                    <Link href={link?.path} key={index} className={`${link?.path === pathname && 'text-accent border-b-2 border-accent'} capitalize hover:text-accent transition-all`}>
                        {link?.name}
                    </Link>
                ))
            }
        </nav>
    )
}

export default Nav
