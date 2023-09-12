"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function login(){
    const router = useRouter()
    return (
        <><h1>Login Page</h1>
        <Link href={"/"}>Goto home</Link>
        <button onClick={()=>router.push('/')}>Goto home</button>
        </>
    )
}