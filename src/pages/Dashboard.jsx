import { Link } from "react-router-dom";
import { Users, FileText, TrendingUp, Plus } from "lucide-react";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import ResultTable from "../components/ResultTable";
import { students } from "../data/results";
export default function Dashboard({ results }) {
  const avg = results.length
    ? Math.round(
        results.reduce((s, r) => s + Number(r.mark), 0) / results.length,
      )
    : 0;
  const pass = results.filter((r) => r.mark >= 50).length;
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <PageHeader
        title="Dashboard"
        description="Overview of your school examination system."
        action={
          <Link
            to="/add-result"
            className="inline-flex gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
          >
            <Plus size={18} />
            Add Result
          </Link>
        }
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Students"
          value={students.length}
          icon={Users}
          note="Registered students"
        />
        <StatCard
          title="Results"
          value={results.length}
          icon={FileText}
          note="Recorded results"
        />
        <StatCard
          title="Average Mark"
          value={`${avg}%`}
          icon={TrendingUp}
          note="Across all results"
        />
        <StatCard
          title="Pass Rate"
          value={`${results.length ? Math.round((pass / results.length) * 100) : 0}%`}
          icon={TrendingUp}
          note="Marks 50% or above"
        />
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
        <div className="flex justify-between border-b p-5">
          <div>
            <b>Recent Results</b>
            <p className="text-xs text-slate-500">Latest examination results</p>
          </div>
          <Link to="/results" className="text-sm font-semibold text-blue-600">
            View all
          </Link>
        </div>
        <ResultTable results={results.slice(-5).reverse()} compact />
      </div>
    </div>
  );
}
