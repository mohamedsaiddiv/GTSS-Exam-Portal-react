function grade(m) {
  return m >= 90
    ? "A+"
    : m >= 80
      ? "A"
      : m >= 70
        ? "B"
        : m >= 60
          ? "C"
          : m >= 50
            ? "D"
            : "F";
}
export default function ResultTable({ results, onDelete, compact = false }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-left text-sm">
        <thead className="border-b bg-slate-50 text-xs uppercase text-slate-500">
          <tr>
            {[
              "Student",
              "Class",
              "Subject",
              "Mark",
              "Grade",
              !compact && onDelete ? "Action" : null,
            ].map(
              (x, i) =>
                x && (
                  <th key={i} className="px-5 py-4">
                    {x}
                  </th>
                ),
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {results.map((r) => (
            <tr key={r.id} className="hover:bg-slate-50">
              <td className="px-5 py-4">
                <b>{r.name}</b>
                <p className="text-xs text-slate-400">{r.studentId}</p>
              </td>
              <td className="px-5 py-4">{r.className}</td>
              <td className="px-5 py-4">{r.subject}</td>
              <td className="px-5 py-4 font-semibold">{r.mark}%</td>
              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${r.mark >= 50 ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}
                >
                  {grade(r.mark)}
                </span>
              </td>
              {!compact && onDelete && (
                <td className="px-5 py-4">
                  <button
                    onClick={() => onDelete(r.id)}
                    className="font-medium text-red-600"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {!results.length && (
        <div className="p-10 text-center text-slate-500">No results found.</div>
      )}
    </div>
  );
}
