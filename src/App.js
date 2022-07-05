import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState,useEffect } from "react";
import Emplist from "./Emplist";
import Empdetail from "./Empdetail";
import ErrorPage from "./ErrorPage";
import Empadd from './Empadd';
import axios from "axios";

function App() {
  
  const [apidata, setApiData] = useState([]);
  const [heading,setHeading] = useState(false);
  useEffect(() => {
    const fetchData = async() => {
      const url ="https://reqres.in/api/users";
      const {data,status} =  await axios.get(url)
      console.log(data)
      console.log(status)
      if(status === 200){
        setApiData(data.data)
      }
    };
      if(apidata.length == 0){
        fetchData();        
      }
  }, [])
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Emplist {
        ...{apidata,setApiData,heading,setHeading}
      } />} />
      <Route path="/emp_add" exact element={<Empadd {
        ...{apidata,setApiData,heading,setHeading}
      } />} />
      <Route path="/emp_id/:id" exact element={<Empdetail {
        ...{apidata,setApiData,heading,setHeading}
      } />} />
      <Route path="/emp_edit/:id" exact element={<Empadd {
        ...{apidata,setApiData,heading,setHeading}
      } />} />
      {/* <Route path="/edit" exact element={<Empadd {
        ...{apidata,setApiData,heading,setHeading}
      } />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
      </BrowserRouter>
      {/* <Emplist /> */}
      {/* <Empdetail /> */}
    </div>
  );
}

export default App;
