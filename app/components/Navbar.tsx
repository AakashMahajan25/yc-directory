import Link from "next/link";
import React from "react";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="flex items-center py-4 px-8 bg-white">
      <nav className="flex justify-between items-center w-full">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
                <>
                    <Link href="/create">
                        Create
                    </Link>
                <form action={async () =>{
                    "use server";
                    await signOut()}}><button type="submit">Logout</button></form>
            </>
            ) : (<form action={async () =>{ 
                    "use server";
                    await signIn("github")}}><button type="submit">Login</button></form>)}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
