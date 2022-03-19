import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

//Components
import Dashboard from "../pages/Dashboard/Dashboard";
import LayoutDash from "../shared/layouts/LayoutDash/LayoutDash";

const Dash = () => {
  return (
    <LayoutDash>
      <Outlet />
    </LayoutDash>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dash />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
