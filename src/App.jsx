import { 
  BrowserRouter as Router, 
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Layout from "./components/Layout";
import Chat from "./pages/Chat";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Navigate to="/chat" replace />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
