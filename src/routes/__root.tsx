import { Outlet, createRootRoute } from "@tanstack/react-router";
import Sidebar from "../views/sidebar";
import Header from "../views/header";

import sadbot from "../assets/sadbot.png";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function NotFoundComponent() {
  return (
    <>
      <h1 className="text-indigo-900 text-6xl font-semibold">⬩404⬩</h1>

      <img src={sadbot} alt="Sad bot" width="300" />
      <p>
        Sidan du letar efter finns inte. Var god dubbelkolla URL:en och försök
        igen.
      </p>
    </>
  );
}

function RootComponent() {
  return (
    <div className="flex items-center justify-start h-screen font-nunito">
      <div className="flex justify-start h-full"></div>
      <Sidebar />
      <div className="flex-1 h-full">
        <Header />
        <div className="min-h-[calc(100%-85px)] h-[calc(100%-85px)] flex flex-col justify- items-center p-6 gap-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
