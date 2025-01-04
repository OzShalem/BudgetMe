interface NavLinkItem {
  to: string;
  label: string;
}

const navLinks: NavLinkItem[] = [
  { to: "/", label: "Home" },
  { to: "/BudgetPlanner", label: "Budget Planner" },
  { to: "/Tips", label: "Tips" },
  { to: "/Reviews", label: "Reviews" },
  { to: "/Download", label: "Download" },
];

export { navLinks };
