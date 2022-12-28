import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/top-rated" element={<TopRated />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </main>
  );
}

export default App;
