"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center">
      <div className="container flex justify-between max-w-7xl my-0 mx-auto">
        <div>logo</div>
        <div className="flex items-center">
          {/* underline is used instead of active class */}
          <Link
            href="/"
            className={`py-2 px-8 hover:bg-red-500 hover:text-white ${
              pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`py-2 px-8 hover:bg-red-500 hover:text-white  ${
              pathname === "/about" ? "underline" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`py-2 px-8 hover:bg-red-500 hover:text-white  ${
              pathname === "/blog" ? "underline" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`py-2 px-8 hover:bg-red-500 hover:text-white  ${
              pathname === "/contact" ? "underline" : ""
            }`}
          >
            Contact
          </Link>

          <Link
            href="/login"
            className={`py-2 px-8 hover:bg-red-500 hover:text-white  ${
              pathname === "/login" ? "underline" : ""
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
