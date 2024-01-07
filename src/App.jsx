import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./index.css"

const App = () => {
  return (
  <div className="wrapper">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  )
};

export default App;