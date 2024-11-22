"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Default image URL if the user image is not available
  const defaultImage = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
  
  // Get the user image if session exists
  const imageURL = session?.user?.image || defaultImage;

  // Log to check if image URL is set properly
  console.log("User Image URL:", imageURL);
  console.log("Session Status:", status);

  return (
    <>
      <div className="navbar bg-base-100 px-8">
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl" href="/">
            {session ? session.user?.name : "USER"}
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="flex items-center gap-x-5">
            <div className="flex gap-x-4">
              <button 
              onClick={() => router.push("/create")}
              className="btn btn-neutral">Create Project</button>

              {!session ? (
                <button onClick={() => signIn()} className="btn btn-primary">
                  Sign in
                </button>
              ) : (
                <button onClick={() => signOut()} className="btn btn-primary">
                  Sign out
                </button>
              )}
            </div>

            <div className="w-12">
            {session?<Image src={imageURL} alt="User Image" width={50} height={50} className="rounded-full"/>:null 

            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
