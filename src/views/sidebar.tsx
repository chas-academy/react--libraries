import {
  BeanIcon,
  CherryIcon,
  CogIcon,
  HomeIcon,
  LogOutIcon,
  Table2Icon,
} from "lucide-react";

import { Link } from "@tanstack/react-router";

function Sidebar() {
  return (
    <div className="p-6 flex flex-col items-start justify-between border-r h-full bg-linear-to-r from-violet-50 to-indigo-50">
      <div>
        <img src="https://www.library.cornell.edu/wp-content/themes/cul-theme/images/branding/CULibraryRed.svg" alt="logo" className="h-16 mb-10" />
        <div className="flex flex-col gap-2">
          <Link to="/" className="hover:opacity-70">
            <h4 className="flex items-center gap-2">
              <HomeIcon className="size-5" /> Startsida
            </h4>
          </Link>
          <Link to="/table" className="hover:opacity-70">
            <h4 className="flex items-center gap-2">
              <Table2Icon className="size-5" /> Tabell
            </h4>
          </Link>
          <Link to="/bean" className="hover:opacity-70">
            <h4 className="flex items-center gap-2">
              <BeanIcon className="size-5" /> Bean
            </h4>
          </Link>
          <Link to="/cherry" className="hover:opacity-70">
            <h4 className="flex items-center gap-2">
              <CherryIcon className="size-5" /> Körsbär
            </h4>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link to="/settings" className="hover:opacity-70">
          <h4 className="flex items-center gap-2">
            <CogIcon className="size-5" /> Inställningar
          </h4>
        </Link>
        <Link to="/logout" className="hover:opacity-70">
          <h4 className="flex items-center gap-2">
            <LogOutIcon className="size-5" /> Logga ut
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
