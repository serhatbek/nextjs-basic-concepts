import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-red-400 flex gap-2">
        <Link href="/doc">Doc</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
    </>
  );
}
