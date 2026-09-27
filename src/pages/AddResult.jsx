import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { students } from "../data/results";
export default function AddResult({ onAdd }) {
  const nav = useNavigate();
  const [msg, setMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submit = (d) => {
    const s = students.find((x) => x.id === d.studentId);
    onAdd({
      studentId: s.id,
      name: s.name,
      className: s.className,
      subject: d.subject,
      mark: Number(d.mark),
    });
    setMsg("Result added successfully!");
    reset();
    setTimeout(() => nav("/results"), 700);
  };
  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
      <PageHeader
        title="Add Exam Result"
        description="Enter a new student examination result."
      />
      <form
        onSubmit={handleSubmit(submit)}
        className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8"
      >
        {msg && (
          <div className="mb-6 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
            {msg}
          </div>
        )}
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="sm:col-span-2 text-sm font-semibold">
            Student
            <select
              {...register("studentId", {
                required: "Please select a student.",
              })}
              className="mt-2 w-full rounded-xl border bg-white px-4 py-3"
            >
              <option value="">Select student</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.id} — {s.name} ({s.className})
                </option>
              ))}
            </select>
            {errors.studentId && (
              <p className="text-xs text-red-600">{errors.studentId.message}</p>
            )}
          </label>
          <label className="text-sm font-semibold">
            Subject
            <select
              {...register("subject", { required: "Please select a subject." })}
              className="mt-2 w-full rounded-xl border bg-white px-4 py-3"
            >
              <option value="">Select subject</option>
              {[
                "Mathematics",
                "English",
                "Computer Science",
                "Physics",
                "Biology",
                "Geography",
                "History",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
            {errors.subject && (
              <p className="text-xs text-red-600">{errors.subject.message}</p>
            )}
          </label>
          <label className="text-sm font-semibold">
            Mark (%)
            <input
              type="number"
              {...register("mark", {
                required: "Mark is required.",
                min: { value: 0, message: "Minimum is 0." },
                max: { value: 100, message: "Maximum is 100." },
              })}
              placeholder="e.g. 85"
              className="mt-2 w-full rounded-xl border px-4 py-3"
            />
            {errors.mark && (
              <p className="text-xs text-red-600">{errors.mark.message}</p>
            )}
          </label>
        </div>
        <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white">
          Save Result
        </button>
      </form>
    </div>
  );
}
