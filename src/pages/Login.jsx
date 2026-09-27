import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [e, setE] = useState("");
  const [p, setP] = useState("");
  const nav = useNavigate();

  return (
    <div className="grid min-h-screen place-items-center bg-slate-950 px-4">
      
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

    
        <img
          src="/src/components/school logo.jpg"
          alt="GTSS Logo"
          className="mx-auto h-24 w-24 cursor-pointer object-contain"
        />

     
        <h1 className="mt-5 text-center text-2xl font-bold">
          GTSS Portal
        </h1>

        <p className="text-center text-sm text-slate-500">
          Administrator Login
        </p>

     
        <form
          onSubmit={(x) => {
            x.preventDefault();
            nav("/dashboard");
          }}
          className="mt-8 space-y-5"
        >

          <label className="block text-sm font-semibold">
            Email

            <input
              required
              type="email"
              value={e}
              onChange={(x) => setE(x.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="admin@gtss.edu"
            />
          </label>

    
          <label className="block text-sm font-semibold">
            Password

            <input
              required
              type="password"
              value={p}
              onChange={(x) => setP(x.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="••••••••"
            />
          </label>

    
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </form>

     
        <Link
          to="/"
          className="mt-6 block text-center text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to home
        </Link>

      </div>
    </div>
  );
}