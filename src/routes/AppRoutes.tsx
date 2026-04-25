import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "../pages/User";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
