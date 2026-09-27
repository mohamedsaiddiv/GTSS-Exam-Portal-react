import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ResultTable from "../components/ResultTable";
export default function Results({ results, onDelete }) {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      results.filter((r) =>
        `${r.name} ${r.studentId} ${r.subject} ${r.className}`
          .toLowerCase()
          .includes(q.toLowerCase()),
      ),
    [results, q],
  );
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <PageHeader
        title="Exam Results"
        description="Manage student examination results."
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
      <div className="relative mb-6 max-w-xl">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={19}
        />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search results..."
          className="w-full rounded-xl border bg-white py-3 pl-11 pr-4"
        />
      </div>
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <ResultTable results={list} onDelete={onDelete} />
      </div>
    </div>
  );
}
