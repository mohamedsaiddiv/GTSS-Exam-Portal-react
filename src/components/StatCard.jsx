export default function StatCard({ title, value, icon: Icon, note }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold">{value}</p>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={22} />
        </div>
      </div>
      {note && <p className="mt-4 text-xs text-slate-500">{note}</p>}
    </div>
  );
}
