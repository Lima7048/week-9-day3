import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

export default function Nav() {
  const { userId } = auth();
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/Feed"}>Social Feed</Link>
      {userId ? <UserButton /> : <SignInButton />}
      {/* {!userId ? <SignInButton/> : <UserButton/>} */}
    </nav>
  );
}
