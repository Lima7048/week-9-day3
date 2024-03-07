import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
// import Nav from "@/app/components/"

export default function Nav() {
  const { userId } = auth();
  return (
    <nav
      className=" text-5xl text-pink-400 flex m-4 justify-between absolute inset-x-0 top-0 h-16
    bg-yellow-100 bg-contain 
"
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/Feed"}>Social Feed</Link>
      {userId ? <UserButton /> : <SignInButton />}
      {/* {!userId ? <SignInButton/> : <UserButton/>} */}
    </nav>
  );
}
