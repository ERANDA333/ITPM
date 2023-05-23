import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../css/styles.css'

function StudentProfile() {
    
    const [student, setstudent] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("email");
        axios.get(`http://localhost:5000/api/student/${email}`).then((res) => {             
            setstudent(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const EditStudent = (event, student) => {
        event.preventDefault();
        navigate('/studentUpdate', {state: {student}});
    }

    const DeleteStudent = (event, id) => {
        event.preventDefault();
        axios.delete(`http://localhost:5000/api/student/del/${id}`).then((res) => {
            navigate("/");
        }).catch((err) => {
            console.log(err);
        })
    }

    return (

    <div class="contain"> 
        <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" styles={{backgroundcolor: 'rgba(195, 245, 239, 0.141)'}}>
        <a href="#" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
        </a>
        <a href="/profile" class="w3-bar-item w3-button w3-padding-large w3-black">
            <i class="fa fa-user w3-xxlarge"></i>
            <p>PROFILE</p>
        </a>
        <a href="#photos" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-eye w3-xxlarge"></i>
            <p>SIGN OUT</p>
        </a>
        <a href="/" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-envelope w3-xxlarge"></i>
            <p>REGISTER</p>
        </a>
        </nav>  
        <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
            <div class="w3-bar w3-blue w3-opacity w3-hover-opacity-on w3-center w3-small">
                <a href="#" class="w3-bar-item w3-button" styles={{width:'25% !important'}}>HOME</a>
                <a href="/profile" class="w3-bar-item w3-button" styles={{width:'25% !important'}}>PROFILE</a>
                <a href="#photos" class="w3-bar-item w3-button" styles={{width:'25% !important'}}>SIGN OUT</a>
                <a href="/" class="w3-bar-item w3-button" styles={{width:'25% !important'}}>REGISTER</a>
            </div>
        </div>
        <div className="chef-container">
        <div className="container pt-7">
        <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-5"> 
        <div className="wrapper">
            <Form className="row row g-4 justify-content-center">
                <Form.Group className="col-8">
                    <h2 style={{textAlign:'center'}}><b>Student Profile</b></h2>
                </Form.Group>
            </Form>
            <Form className="row row g-4 justify-content-center">
                <Table className="table table-striped table-bordered table-hover" id="table">   
                    <tbody>
                        {/* <tr>
                            <th>Student ID</th>
                            <td>{student._id}</td>
                        </tr> */}
                        <tr>
                            <th>Student Name</th>
                            <td>{student.name}</td>
                        </tr>
                        <tr>
                            <th>Date of Birth</th>
                            <td>{student.dob}</td>
                        </tr>
                        <tr>
                            <th>E-mail Address</th>
                            <td>{student.email}</td>
                        </tr> 
                        <tr>
                            <th>Mobile Number</th>
                            <td>{student.mobile}</td>
                        </tr>
                        <tr>
                            <th>Subject</th>
                            <td>{student.subjects}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>{student.gender}</td>
                        </tr>
                        <tr>
                            <th>Registration Date</th>
                            <td>{student.registerDate}</td>
                        </tr>
                        <tr>
                            <td>
                            <Form.Group>
                                <Button className="btn btn-warning btn-lg" id="button" type="button" onClick={(event) => EditStudent(event, student)}>Update</Button>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group>
                                <Button className="btn btn-danger btn-lg" id="button" type="button" onClick={(event) => DeleteStudent(event, student._id)}>Delete</Button>
                            </Form.Group>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div> 
    )
}

export default StudentProfile;
