import { useLocation } from "@tanstack/react-router";

const pathnameMap: Record<string, string> = {
  "/": "Startsida",
  "/table": "Tabell",
  "/bean": "Bean",
  "/cherry": "Körsbär",
};

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="border-b p-6 w-full">
      <h2 className="w-fit font-bold px-2 rounded-md bg-indigo-100">{pathnameMap[pathname]}</h2>
    </div>
  );
}

export default Header;
