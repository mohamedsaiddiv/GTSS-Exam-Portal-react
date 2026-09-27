import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, ShieldCheck, Users } from "lucide-react";
export default function Home() {
  return (
    <div>
      <section className="bg-slate-950 px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              GTSS Student Management System
            </span>
            <h1 className="mt-6 text-4xl font-extrabold sm:text-6xl">
              Student Exam Results Portal
            </h1>
                     <div className="mt-8 flex gap-3">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
              >
                Open Dashboard <ArrowRight size={18} />
              </Link>
              <Link
                to="/results"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold"
              >
                View Results
              </Link>
            </div>
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {[
              [Users, "Student Management", "View and search student records."],
              [
                BarChart3,
                "Exam Analytics",
                "Track marks and academic performance.",
              ],
              [
                ShieldCheck,
                "Responsive UI",
                "Clean interface for desktop and mobile.",
              ],
            ].map(([I, t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <I className="text-blue-400" />
                <h3 className="mt-4 font-bold">{t}</h3>
                <p className="mt-2 text-sm text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
