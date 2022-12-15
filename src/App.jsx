import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./App.css";
import Footer from "./components/rodape";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
