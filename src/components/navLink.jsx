"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function NavLink({ link}) {
    const pathName=usePathname()
    return<Link href={link.url} key={link.title}
    className={`rounded p1 ${pathName===link.url && "bg-black text-white"} `}>
        {link.title}
    </Link>
    
}