import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Homepage from "./Components/Homepage.jsx";
import Slidbar from "./Components/Slidbar.jsx";
import Footer from "./Components/Footer.jsx";
import './Components/Comp.css';

function App() {
  return (
    <div >
      <Navbar />
      <Sidebar />
      <Homepage />
      <Slidbar type={"popular"} title={"MOVIES YOU MUST WATCH"}/>
      <Slidbar type={"284052/similar"} title={"RECOMMENDED MOVIES FOR YOU"} />
      <Slidbar type={"top_rated"} title={"BOLLYWOOD CLASSIC"} />
      <Footer />
    </div>
  );
}

export default App;
