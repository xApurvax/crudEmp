import React,{useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import "./listStyle.css"

const Emplist = () => {
  
    const [employeeData, setEmployeeData] = useState([]);
    
    useEffect(() =>{
        const fetchData = async() => {
            const url ="https://reqres.in/api/users";
            const response =  await axios.get(url)
            const jsonData = response.data
            const empData = jsonData.data
            console.log(empData)
            setEmployeeData(empData)
        }
        fetchData();        
    },[])

  return (
    <div>
        <TableContainer
            component={Paper} 
            variant="outlined"
            sx={{margin : "20px" ,width:"1300px", border:"1px solid #000"}}>
  <Table aria-label="demo table">
    <TableHead>
      <TableRow>
        <TableCell sx={{fontWeight: 800}}>#</TableCell>
        <TableCell sx={{fontWeight: 800}}>Employee Image</TableCell>
        <TableCell sx={{fontWeight: 800}}>Employee First Name</TableCell>
        <TableCell sx={{fontWeight: 800}}>Employee Last Name</TableCell>
        <TableCell sx={{fontWeight: 800}}>Employee E-mail</TableCell>
        <TableCell sx={{fontWeight: 800}}>Action</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
    { employeeData?.map((data,index) => {
        return(
                <TableRow key={index}>
                    <TableCell>{index}</TableCell>
                    <TableCell><img style={{height:"70px", borderRadius:"50%"}}  src = {data.avatar} /></TableCell>
                    <TableCell>{data.first_name}</TableCell>
                    <TableCell>{data.last_name}</TableCell>
                    <TableCell>{data.email}</TableCell>

                </TableRow>
        );
    })}
    </TableBody>
  </Table>
</TableContainer>
    </div>
  )
}

export default Emplist