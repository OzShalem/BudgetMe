import { createBrowserRouter } from "react-router-dom";
import Planner from "../Pages/Planner";
import Tips from "../Pages/Tips";
import Reviews from "../Pages/Reviews";
import LandingPage from "../Pages/Landingpage";
import Download from "../Pages/Download";
import Layout from "../Pages/Layout";

export interface NavLinkItem {
  to: string;
  label: string;
}

export const navLinks: NavLinkItem[] = [
  { to: "/", label: "Home" },
  { to: "/Planner", label: "Budget Planner" },
  { to: "/Tips", label: "Tips" },
  { to: "/Reviews", label: "Reviews" },
  { to: "/Download", label: "Download" },
];


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "Planner", element: <Planner /> },
      { path: "Tips", element: <Tips /> },
      { path: "Reviews", element: <Reviews /> },
      { path: "Download", element: <Download /> },
    ],
  },
]);