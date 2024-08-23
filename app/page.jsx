import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Link href="/about">About sayfasına git</Link>
      <br />
      <Link href="/docs/post-1">Post 1</Link>
      <br />
      <Link href="/docs/post-1/post-2">Post 2</Link>
      <br />
      <Link
        href={{
          pathname: "/about",
          query: {
            name: "Next.js",
            surname: "ff",
          },
        }}
      >
        Obje ile git
      </Link>
    </div>
  );
};

export default HomePage;
