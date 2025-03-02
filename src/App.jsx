import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
