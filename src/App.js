import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from  "./components/Home"
import About from  "./components/About"
import Events from  "./components/Events"
import Team from  "./components/Team"
import Achievements from "./components/Achievements"
import Contact from  "./components/Contact"
import Developer from  "./components/Developer"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
