import React,{callback} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useHistory} from "react-router-dom";
import axios from 'axios';
 import {values }from 'lodash';



export default function Newuser() {
    const history = useHistory();
    const panreg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object({
        firstname : Yup.string().required("Firstname is mandatory"),
        lastname : Yup.string().required("lastname is mandatory"),
        email : Yup.string().required("Please Enter a Email"),
        age:Yup.number().typeError("Enter a valid age").min(18," Minimum Age is 18").max(60,"Maximum age is 60"),
        phonenumber : Yup.string().matches(phoneRegExp,"Phone number is invalid").required("phone number cant be empty"),
      
    }) 

    const { handleSubmit,handleChange,Values,errors} = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            age:0,
            email:'',
            phonenumber: '',
        },
        validationSchema,
        //database connectivity
        onSubmit(values) {
            axios.post("http://localhost:3000/names");
            console.log(values);
            axios.post("http://localhost:8080/Register",values).then(res=>res.data).then((data)=>{
                  alert("User Onboarded successfully");
                  history.push("/Userlogin")
                  console.log("=============Submitted");
                  console.log(data);
            }
            ).catch((err)=>{
                    console.log("error in your code")
                })
        }
      
        
        }) 

    return (
        <div className="ajx">
            <div style={{color:"wheat"}}>NEW USER LOGIN </div>
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>First Name</label><br></br>
                    <input type="text" name="firstname" onChange={handleChange} values={values.firstname}/><br></br>
                    <div className="error">
                    {errors.firstname ? errors.firstname : null}
                    </div>
                   
                </div>
                <div>
                    <label>Last Name</label><br></br>
                    <input type="text" name="lastname" onChange={handleChange} values={values.lastname}/><br></br>
                    <div className="error">
                    {errors.lastname ? errors.lastname : null}
                    </div>
                </div>

                <div>
                    <label>Age</label><br></br>
                    <input type="number" name="age" onChange={handleChange} values={values.age}/><br></br>
                    <div className="error">
                    {errors.age ? errors.age : null}
                    </div>
                </div>
                <div>
                    <label>Email</label><br></br>
                    <input type="text" name="email" onChange={handleChange} values={values.email}/><br></br>
                    <div className="error">
                    { errors.email ? errors.email : null}
                    </div>
                </div>

                <div>
                    <label>Phone Number</label><br></br>
                    <input type="text" name="phonenumber" onChange={handleChange} values={values.phonenumber}/><br></br>
                    <div className="error">
                    {errors.phonenumber ? errors.phonenumber : null}
                    </div>
                </div>
                <br></br>
                <button type="submit" className="btn btn-dark" >Submit</button>
                {"||"}
                <button  className="btn btn-dark "onClick={() => history.push("/")}>Back</button>
            </form>
        </div>
    )
}