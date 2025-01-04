import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AdviceForm from "./Components/AdviceForm";
import AboutUs from "../src/Pages/AboutUs";
import BudgetPlanner from "./Components/BudgetPlanner";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/BudgetPlanner" element={<BudgetPlanner />} />
        <Route path="Advice" element={<AdviceForm />} />
        <Route path="AboutUs" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default App;
