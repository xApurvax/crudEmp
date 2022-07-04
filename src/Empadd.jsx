import React,{useEffect, useState} from 'react'
import {useParams,Link,useNavigate,useLocation} from 'react-router-dom'
import { Formik , Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';


const Empadd = ({heading,edit,setEditData,apidata,setApiData,update,setUpdate}) => {
    console.log(heading)

    const navigate  = useNavigate();
    const location = useLocation();
    console.log(location)
    const {id} = useParams();

    if(location.pathname.match('/emp_add')){
        console.log("add more")
    }else{
        console.log("edit more")
    }

    const [formdata, setFormData] = useState({});

    useEffect(() =>{
        setFormData(edit);   
    },[])


    const loginSchema = Yup.object().shape({
        constName: Yup.string()
          .min(2,"Must be more than 2 char")
          .max(10, 'Must be 10 characters or less')
          .required('First Name Required'),
        lastName: Yup.string()
          .min(2,"Must be more than 2 char")
          .max(10, 'Must be 20 characters or less')
          .required('Last Name Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })
    
       
  return (
    <div>
    <Formik
    initialValues= {{
        firstName: '',
        lastName: '',
        email: '',
    }}
      validationSchema= {loginSchema}
      onSubmit ={ (values) =>{
        console.log(values);
        // setApiData([...apidata,values])
        // navigate("/")
      }}
    >

{({ errors, touched }) => (
     <Form style={{display:"flex" ,flexDirection:"column",gap:"30px" ,justifyContent:"center",alignItems:"center",height:"100vh"}}>
      
     {heading ? <h2>Add New Employee</h2> : <h2>Update Employee</h2>}
     
      <div style={{display:"flex",gap:"30px" ,width:"40%",alignItems:"center"}}>
      <PersonIcon fontSize="large" />
      <div style={{display:"flex",gap:"20px" ,width:"80%",alignItems:"center"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"1px" ,width:"50%"}}>
            <Field placeHolder="First name" variant="outlined" name="firstName" type='text' />
            {touched.firstName && errors.firstName ? (
                <div style={{color:"red"}}>{errors.firstName}</div>
            ) : null}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"1px" ,width:"50%"}}>
            <Field placeHolder="Last name" variant="outlined" name="lastName" type='text'  />
            {touched.lastName && errors.lastName ? (
                <div style={{color:"red"}}>{errors.lastName}</div>
            ) : null}
       </div>
       </div>
      </div> 

      <div style={{display:"flex",gap:"30px" ,width:"40%",alignItems:"center"}}>
      <EmailIcon fontSize="large"  />
      <div>
      <Field placeHolder="Email" variant="outlined" style={{width:"400px"}} type='text'  name="email" />
      {touched.email && errors.email ? (
         <div style={{color:"red"}}>{errors.email}</div>    
       ) : null}
      </div>
      </div>

      <div  style={{display:"flex",gap:"30px",width:"30%",justifyContent:"center"}}>
      <Button variant="contained" type='submit'>Add</Button>
      <Link to={'/'} style={{textDecoration:"none"}}>
      <Button  variant="contained" color="error">cancel</Button></Link>
      </div>
  </Form>
  )}
  </Formik>
    </div>
  )
}

export default Empadd