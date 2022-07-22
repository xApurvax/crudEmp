import { BrowserRouter,Routes,Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import ScorePage from "./Pages/ScorePage.jsx";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <ScorePage/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/match-event/:id" element={<ScorePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
