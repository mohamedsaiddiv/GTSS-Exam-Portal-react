import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Menu,
  LayoutDashboard,
  Users,
  FileText,
  PlusCircle,
  LogOut,
  GraduationCap,
} from "lucide-react";
const links = [
  ["/dashboard", "Dashboard", LayoutDashboard],
  ["/students", "Students", Users],
  ["/results", "Results", FileText],
  ["/add-result", "Add Result", PlusCircle],
];
function Sidebar({ close }) {
  return (
    <aside className="flex h-full w-64 flex-col bg-slate-950 text-white">
      <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">
      <div className="h-10 w-10 overflow-hidden rounded-2xl">
  <img

    src="/src/components/school logo.jpg"
    alt="GTSS Logo"
    className=" cursor-pointer h-full w-full object-contain"
  />
</div>
        <div>
          <b>GTSS</b>
          <p className="text-xs text-slate-400">Results Portal</p>
        </div>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {links.map(([to, label, Icon]) => (
          <NavLink
            key={to}
            to={to}
            onClick={close}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${isActive ? "bg-blue-600" : "text-slate-300 hover:bg-slate-800"}`
            }
          >
            <Icon size={19} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-slate-800 p-4">
        <NavLink
          to="/login"
          onClick={close}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-slate-800"
        >
          <LogOut size={19} />
          Logout
        </NavLink>
      </div>
    </aside>
  );
}
export default function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="fixed inset-y-0 left-0 z-40 hidden lg:block">
        <Sidebar />
      </div>
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            className="absolute inset-0 bg-slate-950/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative h-full w-64">
            <Sidebar close={() => setOpen(false)} />
          </div>
        </div>
      )}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 sm:px-6">
          <button
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">School Administrator</p>
              <p className="text-xs text-slate-500">GTSS</p>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-100 font-bold text-blue-700">
              SA
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
