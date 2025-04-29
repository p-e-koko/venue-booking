import Login from "./login";
import Menu from "./menu";
import { storage$ } from "../components/storage";
export default function Home() {
  const isLoggedIn = storage$.isLoggedIn.get();
  return (
    <main className="container-fluid">{isLoggedIn ? <Menu /> : <Login />}</main>
  );
}