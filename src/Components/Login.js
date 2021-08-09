

import React ,{useState,useEffect} from 'react'

import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";


export default function Login() {
    const history = useHistory();
localStorage.getItem('dark-mode');
localStorage.setItem('dark-mode', true);
localStorage.removeItem('dark-mode');



const [dark, setDark] = React.useState(
    localStorage.getItem('dark-mode') === 'true'
  );
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const validationSchema = Yup.object({
        username : Yup.string().required("Username is mandatory"),
        password : Yup.string().matches(regularExpression,"Password should include alphates,special characters and numbers"),
     
    }) 
    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            username:'',
            password:'',
           
        },
        validationSchema,
        onSubmit(values) {
            console.log(values);
        }
    }) 

useEffect(() => {
    return () => {
        localStorage.setItem('dark-mode', dark);
    }
}, [dark])
    

      
    return (
        <div className="a3">
            <div className="a2">

            </div>
            

             <div className="a1">
            <form onSubmit={handleSubmit}>
                <br></br>
                <br></br>
                <br></br>
                <h3 style={{ color: "GrayText" }}>Login</h3>
                <br></br>

                <div className="form-group">
                    <br></br>
                    <label>Username :</label>
                    <input type="text" name="username" placeholder="Enter username" values={values.username} onChange={handleChange} />
                    <br></br>
                    {errors.username ? errors.username : null}
                </div>
                <br></br>
                <div className="form-group">
                    <br></br>
                    <label>Password :</label>
                    
                    <input type="password" name="password" placeholder="Enter password" values={values.password} onChange={handleChange}/>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                    {errors.password ? errors.password : null}
                </div>
                <br></br>

                <div className="form-group">
                    <div className="">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark " onClick={() => history.push("/Userlogin")}>Sign in</button>
                {"||"}
                <button  className="btn btn-dark "onClick={() => history.push("/")}>Back</button>
            
            </form>
            </div>
            
        </div>




    )
}