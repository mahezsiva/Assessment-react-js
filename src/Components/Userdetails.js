import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ManageUser() {
  const [res, setResult] = useState([]);
  const [res1, setResult1] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/user").then(res => res.json()).then(data => {
      console.log(data);
      setResult(data);
    }).catch(e => {
      console.error("ERR ...");
      console.error(e);
    }).finally(() => {
      console.log("I am in finally");
    })

  }, [res1])
  const deleteUser = (e) => {
    e.preventDefault();
    const id = e.target.id;
    console.log(id);
    const url = `http://localhost:8080/Register/manage/${id}`
    axios.delete(url)
      .then(res1 => {
        console.log(res1);
        setResult1(res1.data);
        console.log(res1.data);
      })
  }
  return (
    <div>
      <div className="container-xl ">
        <div className="col-lg-13">
          <div className="card">
            <div className="card-header" style={{color:"white",backgroundColor:"tan"}}><h4>USER ARCHIVE</h4></div>
            <div className="card-body">
              <table className="table table-bordered table-dark">
                <thead>
                  <tr className="table-dark">
                 
                  <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Age</th>
                    <th scope="col">Number</th>
                    <th scope="col">Email</th>
                  
                  </tr>
                </thead>
                <tbody>

                  {res.map((x) => {
                    return <tr >
                  
                      <td ><label key={x.firstname}>{x.firstname}</label></td>
                      <td ><label key={x.lastname}>{x.lastname}</label></td>
                      <td ><label key={x.age}>{x.age}</label></td>
                      <td ><label key={x.aadhar}>{x.aadhar}</label></td>
                      <td ><label key={x.pan}>{x.pan}</label></td>
                      <td ><label key={x.phonenumber}>{x.phonenumber}</label></td>
                      <td ><label key={x.email}>{x.email}</label></td>
                      <td ><label key={x.accountnumber}>{x.accountnumber}</label></td>
                      <td ><Link id={x.id} to={`/Register/manage/${x.id}`} className="btn btn-primary active">edit</Link></td>
                      <td ><button className="btn btn-primary active" id={x.id} onClick={deleteUser}>delete</button></td>
                    </tr>
                  })}


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}