import { BrowserRouter,Routes,Route } from "react-router-dom";
import './Components/Comp.css';
import Home from "./Components/Home.jsx";

function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:id" element={<Home />} />
      </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
