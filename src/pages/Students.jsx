import { useMemo, useState } from "react";
import { Search, UserRound } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { students } from "../data/results";
export default function Students() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      students.filter((s) =>
        `${s.name} ${s.id} ${s.className}`
          .toLowerCase()
          .includes(q.toLowerCase()),
      ),
    [q],
  );
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <PageHeader
        title="Students"
        description="Search and view registered students."
      />
      <div className="relative mb-6 max-w-xl">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={19}
        />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, ID or class..."
          className="w-full rounded-xl border bg-white py-3 pl-11 pr-4"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s) => (
          <div key={s.id} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600">
                <UserRound />
              </div>
              <div>
                <b>{s.name}</b>
                <p className="text-sm text-slate-500">{s.id}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs text-slate-400">Class</p>
                <b>{s.className}</b>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs text-slate-400">Gender</p>
                <b>{s.gender}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
