import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center text-center">
      <div>
        <p className="text-6xl font-black text-slate-200">404</p>
        <h2 className="mt-4 text-2xl font-bold">Page not found</h2>
        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
