import React,{useEffect, useState} from 'react'
import {useParams,Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import axios from "axios";
import "./listStyle.css"
import Empadd from './Empadd';
import { textAlign } from '@mui/system';


const Emplist = ({edit,setEditData,apidata,setApiData,update,setUpdate , heading , setHeading}) => {
  
  const {id} = useParams();

  
  const [employeeData, setEmployeeData] = useState([]);

  


  
    const removeData = (tid) => {
      console.log(tid)
      // async function() {
        // await axios.delete(`https://reqres.in/api/users/${tid}`);  
      setEmployeeData(employeeData.filter((val) =>{
        if(val.id !== tid){
          return val;
        }
      }));
    // }
      // employeeData.filter
    }
    
    useEffect(() =>{
        const fetchData = async() => {
            const url ="https://reqres.in/api/users";
            const {data,status} =  await axios.get(url)
            // const jsonData = response.data
            // const empData = jsonData.data
            console.log(data)
            console.log(status)
            if(status === 200){
              setEmployeeData(data.data)
              setApiData(data.data)
            }
          };
            if(update){
              setEmployeeData(apidata)
            }else{
              fetchData();        
            }
            
    },[])

  return (
    <div>
    <Link to={"/emp_add"} style={{textDecoration :"none"}}  >
        <Button variant="contained" sx={{margin:"25px", float:"right"}} onClick={()=>setHeading(true)} >Add Employee</Button></Link>
        <TableContainer
            component={Paper} 
            variant="outlined"
            align="center"
            sx={{margin : "25px" ,width:"1180px", borderRadius:"25px",boxShadow:" 0.8em 0.8em 1.2em #d2dce9"}}>
  <Table aria-label="demo table">
    <TableHead>
      <TableRow>
        <TableCell sx={{fontWeight: 800}}>ID</TableCell>
        <TableCell sx={{fontWeight: 800}}>Image</TableCell>
        <TableCell sx={{fontWeight: 800}}>First Name</TableCell>
        <TableCell sx={{fontWeight: 800}}>Last Name</TableCell>
        <TableCell sx={{fontWeight: 800}}>E-mail</TableCell>
        <TableCell sx={{fontWeight: 800,textAlign:"center"}}>Actions</TableCell>
        {/* <TableCell sx={{fontWeight: 800}}>Remove Employee</TableCell> */}
      </TableRow>
    </TableHead>

    <TableBody>
    {employeeData.length == 0 ? 
    <p style={{textAlign:"center", marginTop:"10px"}}>No Records found</p> :
     employeeData?.map((data,index) => {
        return(
                <TableRow key={data.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell><img style={{height:"70px", borderRadius:"50%"}}  src = {data.avatar} /></TableCell>
                    <TableCell>{data.first_name}</TableCell>
                    <TableCell>{data.last_name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"105px"}}>
                    <Link to={`/emp_id/${data.id}`}>
                    <Button variant="contained">View</Button> </Link>
                    <Link to={`/emp_edit/emp_id/${data.id}`} style={{textDecoration :"none"}}  >
                    <Button variant="contained" color="success" sx={{marginLeft:"20px"}} onClick={() => {setEditData({...data}) ; setHeading(false) } } >Edit</Button></Link>
                    <Button sx={{marginLeft:"20px"}} onClick={() => removeData(data.id)} variant="contained" color="error">Delete</Button></TableCell>
                    {/* <TableCell><Button variant="contained" color="error">Delete</Button></TableCell> */}
                </TableRow>
        );
    })
    }
    </TableBody>
  </Table>
</TableContainer>
    </div>
  )
}

export default Emplist