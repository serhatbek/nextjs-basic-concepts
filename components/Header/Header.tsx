"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center">
      <div className="container flex justify-between max-w-7xl my-0 mx-auto">
        <div>logo</div>

        <div className="flex items-center gap-16">
          <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link
            href="/about"
            className={`link ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`link ${pathname === "/blog" ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`link ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
