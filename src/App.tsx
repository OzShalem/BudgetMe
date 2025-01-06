import { Outlet, Route, Routes } from 'react-router-dom'
// @ts-ignore
import BudgetPlanner from './pages/budget-planner'
import Home from './pages/home'
// @ts-ignore
import Navbar from './components/navbar'
import Tips from './pages/tips'
import Reviews from './pages/reviews'
import { Download } from 'lucide-react'
import Footer from './components/footer'


const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/planner" element={<BudgetPlanner />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/download" element={<Download />} />
      </Route>
    </Routes>
  );
};

export default App;
