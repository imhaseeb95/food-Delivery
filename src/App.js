import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="bg-css">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
