import { BrowserRouter,Routes,Route } from "react-router-dom";
import LandingPage1 from "./Pages/LandingPage1.jsx"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import ScorePage1 from "./Pages/ScorePage1.jsx";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <ScorePage/> */}
      {/* <ApiComp /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage1 />} />
        <Route path="/match-event/:id" element={<ScorePage1 />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
