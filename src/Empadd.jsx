import React,{useEffect, useState} from 'react'
import {useParams,Link,useNavigate,useLocation} from 'react-router-dom'
import { Formik , Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';


const Empadd = ({heading,apidata,setApiData}) => {
    console.log(apidata)

    // const [initVal ,setInitVal] = useState(
    //     {
    //         first_name: "" ,
    //         last_name:  "" ,
    //         email:   "",
    //     }
    // )

    const navigate  = useNavigate();
    const location = useLocation();
    // console.log(location)
    const {id} = useParams();

    const editData = (value) => {
        const newData = apidata.map((data) => {
            if(data.id == id){
                return {...value }
            }else{
                return data;
            }
        })



        console.log(newData); 
        setApiData(newData);
        // setInitVal({
        //     first_name: apidata[id-1].first_name ,
        //     last_name:  apidata[id-1].last_name ,
        //     email: apidata[id-1].email
        // })
        console.log("from empadd")
    }


    useEffect(() =>{
        if(location.pathname.match('/emp_add')){
            // console.log("add mode")
        }else{
            // console.log("edit mode")
        }
    })


    const loginSchema = Yup.object({
        first_name: Yup.string()
          .min(2,"Must be more than 2 char")
          .max(10, 'Must be 10 characters or less')
          .required('First Name Required'),
        last_name: Yup.string()
          .min(2,"Must be more than 2 char")
          .max(10, 'Must be 20 characters or less')
          .required('Last Name Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })
    
       
  return (
    <div>
    <Formik
    initialValues= {{
                    email: !id ? "" : apidata[id-1].email,
                    first_name: !id ? "" : apidata[id-1].first_name,
                    last_name: !id ? "" : apidata[id-1].last_name,
                  }}
      validationSchema= {loginSchema}
      onSubmit ={ (values) =>{
        console.log(values,":hi");
        

        if(location.pathname.match('/emp_add')){
            setApiData([...apidata,{id: apidata[apidata.length-1].id+1 ,...values}]);
            navigate("/")
            
        }else {
            editData(values);
            navigate("/")
        }
      }}
    >

{({ errors, touched }) => (
     <Form style={{display:"flex" ,flexDirection:"column",gap:"30px" ,justifyContent:"center",alignItems:"center",height:"100vh"}}>
      
     {heading ? <h2>Add New Employee</h2> : <h2>Update Employee</h2>}
     
      <div style={{display:"flex",gap:"30px" ,width:"40%",alignItems:"center"}}>
      <PersonIcon fontSize="large" />
      <div style={{display:"flex",gap:"20px" ,width:"80%",alignItems:"center"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"1px" ,width:"50%"}}>
            <Field placeHolder="First name" variant="outlined" name="first_name" type='text' />
            {touched.first_name && errors.first_name ? (
                <div style={{color:"red"}}>{errors.first_name}</div>
            ) : null}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"1px" ,width:"50%"}}>
            <Field placeHolder="Last name" variant="outlined" name="last_name" type='text'  />
            {touched.last_name && errors.last_name ? (
                <div style={{color:"red"}}>{errors.last_name}</div>
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
      <Button variant="contained" type='submit'> {heading ? "Add" : "Save"} </Button>
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