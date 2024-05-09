import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";
import SocialLinks from "../components/SocialLinks/SocialLinks";

function AppLayout() {
  return (
    <>
      <NavBar />
      <SocialLinks />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
