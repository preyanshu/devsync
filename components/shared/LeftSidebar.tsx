"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";

import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { userId } = useAuth();

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (<>
           {!isActive && <> <Link
            href={link.route}
            key={link.label}
            className={`leftsidebar_link `}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={24}
              height={24}
              // className={`${!isActive && "filter contrast-100"}`}
              style={{ filter: "contrast(0)" }}
            />

            <p className={`max-lg:hidden ${!isActive && "text-light-1"}`}>{link.label}</p>
          </Link></> }
           {isActive && <> <Link
            href={link.route}
            key={link.label}
            className={`leftsidebar_link `}
            style={{ backgroundColor: "white",color: "black"}}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={24}
              height={24}
              // className={`${!isActive && "filter contrast-100"}`}
              style={{ filter: "contrast(0)" }}
            />

            <p className={`max-lg:hidden ${!isActive && "text-light-1"}`}>{link.label}</p>
          </Link></> }
          </>);
        })}
      </div>

      <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className='flex cursor-pointer gap-4 p-4 leftsidebar_link  '>
              <Image
                src='/assets/logout.svg'
                alt='logout'
                width={24}
                height={24}
              />

              <p className='text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;