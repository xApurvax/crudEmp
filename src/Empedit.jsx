import React,{useEffect, useState} from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

const Empedit = ({edit,setEditData,apidata,setApiData,update,setUpdate}) => {

    console.log("edit",edit)

    const navigate  = useNavigate();

    const {id} = useParams();

    const [formdata, setFormData] = useState({});

    useEffect(() =>{
        setFormData(edit);   
    },[])

    const handleChange = (e) =>{
            const {name , value} = e.target;
            console.log(value);
            setFormData({...formdata,[name] : value})
     }

     const handleSubmit = (e) => {
            const newData = apidata.map((data) =>{
                if(data.id == edit.id){
                    return formdata;
                }else{
                    return data;
                }
            });
            setApiData(newData);
            setUpdate(true);
            navigate('/');
     }

  return (
    <div>
        <form style={{display:"flex" ,flexDirection:"column",gap:"30px" ,justifyContent:"center",alignItems:"center",height:"100vh"}}>
      
            <h2>Update Employee</h2>
            <div style={{display:"flex" ,width:"30%",alignItems:"center",justifyContent:"center"}}>
                <img style={{height:"100px", borderRadius:"50%" }}  src = {formdata.avatar} />
            </div>
            <div style={{display:"flex",gap:"30px" ,width:"30%",alignItems:"center"}}>
            <PersonIcon fontSize="large" />
            <TextField id="outlined-basic" label="First name" variant="outlined" value={formdata.first_name} name="first_name" onChange={handleChange} autoFocus />
            <TextField id="outlined-basic" label="Last name" variant="outlined" value= {formdata.last_name} name="last_name" onChange={handleChange} />
            </div>
            <div style={{display:"flex",gap:"30px" ,width:"30%",alignItems:"center"}}>
            <EmailIcon fontSize="large"  />
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:"100%"}} value= {formdata.email} name="email" onChange={handleChange} />
            </div>
            <div  style={{display:"flex",gap:"30px",width:"30%",justifyContent:"center"}}>
            <Button variant="contained" onClick={() => handleSubmit()}>Save</Button>
            <Link to={'/'} style={{textDecoration:"none"}}>
            <Button variant="contained" color="error">cancel</Button></Link>
            </div>

        </form>
    </div>
  )
}

export default Empedit