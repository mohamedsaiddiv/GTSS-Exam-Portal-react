import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Results from "./pages/Results";
import AddResult from "./pages/AddResult";
import NotFound from "./pages/NotFound";
import { initialResults } from "./data/results";
export default function App() {
  const [results, setResults] = useState(initialResults);
  const addResult = (r) => setResults((x) => [...x, { ...r, id: Date.now() }]);
  const deleteResult = (id) => setResults((x) => x.filter((r) => r.id !== id));
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard results={results} />} />
        <Route path="/students" element={<Students />} />
        <Route
          path="/results"
          element={<Results results={results} onDelete={deleteResult} />}
        />
        <Route path="/add-result" element={<AddResult onAdd={addResult} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
