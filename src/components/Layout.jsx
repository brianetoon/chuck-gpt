import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";

export default function Layout() {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}
