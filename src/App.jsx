import { Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";

function App() {

  return (
    <div className="app">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
