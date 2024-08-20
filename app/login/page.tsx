"use client";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="p-2 rounded-lg bg-slate-600 text-white"
        onClick={() => router.push("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Login;
