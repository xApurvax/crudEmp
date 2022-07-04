import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";
import Emplist from "./Emplist";
import Empdetail from "./Empdetail";
import ErrorPage from "./ErrorPage";
import Empedit from "./Empedit";
import Empadd from './Empadd';

function App() {
  const [edit, setEditData] = useState({});
  const [apidata, setApiData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [heading, setHeading]  = useState(false);

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Emplist {
        ...{edit,setEditData,apidata,setApiData,update,setUpdate ,heading, setHeading}
      } />} />
      <Route path="/emp_add" exact element={<Empadd {
        ...{edit,setEditData,apidata,setApiData,update,setUpdate ,heading , setHeading}
      } />} />
      <Route path="/emp_id/:id" exact element={<Empdetail {
        ...{edit,setEditData,apidata,setApiData,update,setUpdate}
      } />} />
      <Route path="/emp_edit/emp_id/:id" exact element={<Empadd {
        ...{edit,setEditData,apidata,setApiData,update,setUpdate}
      } />} />

<Route path="/edit" exact element={<Empadd {
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
