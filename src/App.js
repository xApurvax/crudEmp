import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";
import Emplist from "./Emplist";
import Empdetail from "./Empdetail";
import ErrorPage from "./ErrorPage";
import Empedit from "./Empedit";


function App() {
  const [edit, setEditData] = useState({});
  const [apidata, setApiData] = useState([]);
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Emplist {
        ...{edit,setEditData,apidata,setApiData,update,setUpdate}
      } />} />
      <Route path="/emp_id/:id" exact element={<Empdetail {
        ...{edit,setEditData,apidata,setApiData,update,setUpdate}
      } />} />
      <Route path="/emp_edit/emp_id/:id" exact element={<Empedit {
        ...{edit,setEditData,apidata,setApiData,update,setUpdate}
      } />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
      </BrowserRouter>
      {/* <Emplist /> */}
      {/* <Empdetail /> */}
    </div>
  );
}

export default App;
