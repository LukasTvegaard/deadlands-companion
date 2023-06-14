import { Route, Routes } from "react-router-dom";
import { EdgePage } from "./EdgePage";
import { EdgeDetailPage } from "./EdgeDetailPage";
import { CodexIndex } from "./CodexIndex";

function Weapons() {
  return <h2>Weapons</h2>;
}

export function CodexRouter() {
  return (
    <Routes>
      <Route index element={<CodexIndex />}></Route>
      <Route path="edges" element={<EdgePage />}></Route>
      <Route path="edges/:id" element={<EdgeDetailPage />} />

      <Route path="weapons" element={<Weapons />}></Route>
    </Routes>
  );
}
