import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import "./App.css";
import Sidebar from "./componets/sidebar";
import First from "./pages/First page";
import Second from "./pages/Second page";

const App = () => {
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="route-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
