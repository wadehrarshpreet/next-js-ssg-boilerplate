import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const navMenu = [
  {
    id: "home",
    label: "Home",
    path: "/#",
  },
  {
    id: "about",
    label: "About",
    path: "/about",
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header className="shadow-md bg-primary">
        <div className="md:w-10/12 lg:w-9/12 m-auto flex justify-between items-center h-full">
          <nav id="leftNav" className="w-64">
            <Link href="/">
              <a>
                <img
                  alt="NextJS"
                  src={
                    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  }
                  width={80}
                  height={80}
                />
              </a>
            </Link>
          </nav>
          <nav
            id="rightNav"
            className="justify-between max-w-2xl hidden md:flex h-full"
          >
            {navMenu.map((navItem) => {
              const isActive = router.pathname === navItem.path;
              return (
                <div
                  key={navItem.id}
                  className="relative flex items-center group"
                >
                  <Link href={navItem.path}>
                    <a
                      key={navItem.id}
                      className={`uppercase h-full nav-item text-center hover:text-current group-hover:border-b-2 group-hover:border-b-primary hover:border-b-2 !no-underline ${
                        isActive ? "border-b-2 active-item" : ""
                      }`}
                    >
                      {navItem.label}
                    </a>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
