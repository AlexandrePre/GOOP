// eslint-disable-next-line import/no-unresolved
import AdminComp from "../components/admin/adminComp";
import NavBar from "../components/NavBar/NavBar";

export default function admin() {
  return (
    <div className="login">
      <NavBar />
      <AdminComp />
    </div>
  );
}
