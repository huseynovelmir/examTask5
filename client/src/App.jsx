import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
