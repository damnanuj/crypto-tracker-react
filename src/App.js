import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import WrongRoute from "./pages/WrongRoute";
import CoinPage from "./pages/CoinPage";
import ComparePage from "./pages/ComparePage";

import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="/compare" element={<ComparePage />} />

            <Route path="*" element={<WrongRoute />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
