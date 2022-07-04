import React,{useEffect, useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from "axios";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';

const Empdetail = () => {
   
    const {id} = useParams();

    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() =>{
        const fetchData = async() => {
            const url =`https://reqres.in/api/users/${id}`;
            const response =  await axios.get(url)
            const jsonData = response.data
            const empData = jsonData.data
            console.log(empData,"hi")
            setEmployeeData(empData)
        }
        fetchData();        
    },[])

  return (
    <div>
        <div id='empCard' style={{display:"flex",justifyContent:"center", alignItems:"center", gap:"20px",height:"100vh"}}>
        <div style={{padding:"15px",display:"flex",justifyContent:"center", alignItems:"center", gap:"25px",borderRadius:"25px",boxShadow:" 0.8em 0.8em 1.2em 1.2em #d2dce9"}}>
            <div id="empCardImg" style={{boxShadow:" 0.8em 0.8em 0.5em 0.1em #d2dce9", borderRadius:"50%",padding:"7px",backgroundColor:"#6c6d71"}}>
                <img src={employeeData.avatar} style={{height:"180px",borderRadius:"50%"}} alt="Employee Image" />
            </div>
            <div id="empCardInfo" style={{display:"flex",flexDirection:"column", gap:"15px"}}>
                <div>
                    <h1>{employeeData.first_name} {employeeData.last_name}</h1>
                </div>
                <div>
                    <p>{employeeData.email}</p>
                </div>
                <div id="empCardIcon" style={{display:"flex",flexDirection:"center", alignItems:"center", gap:"17px"}}>
                    <div><i class="fa-brands fa-facebook fa-2xl"></i></div>
                    <div><i class="fa-brands fa-instagram-square fa-2xl"></i></div>
                    <div><i class="fa-brands fa-twitter fa-2xl"></i></div>
                    <div><i class="fa-brands fa-linkedin fa-2xl"></i></div>
                    <div><i class="fa-brands fa-github fa-2xl"></i></div>
                </div>  
                <div>
                    <div><Link to={'/'} style={{textDecoration:"none"}}><Button variant='outlined'>Go Back</Button></Link></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Empdetail