import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/styles.css'

function StudentProfileUpdate() {

    const location = useLocation();

    const [edits, setEdits] = useState({
        name: location.state.student.name,
        dob: location.state.student.dob,
        email: location.state.student.email,
        password: location.state.student.password,
        mobile: location.state.student.mobile,
        subjects: location.state.student.subjects,
        gender: location.state.student.gender,
        registerDate: location.state.student.registerDate
    });
    const [formErrors, setFormErrors] = useState("");
    const [submit, setSubmit] = useState(false);

    const navigate = useNavigate();

    const UpdateEmployee = (event) => {
        event.preventDefault();

        if (formErrors === "") {
            setSubmit(true);
            let email = edits.email;

            axios.put("http://localhost:5000/api/student/update", edits).then((res) => {
                console.log(res)
                if (res.status === 201) {
                    localStorage.setItem("email", email);
                    navigate("/profile");
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    };

    const EditDetails = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const Data = {...edits};
        Data[fieldName] = fieldValue;

        setEdits(Data);
    }

    return (
        
    <div class="contain"> 
        <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" styles={{backgroundcolor: 'rgba(195, 245, 239, 0.141)'}}>
        <a href="/home" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
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

            <Form className="form" onSubmit={(event) => UpdateEmployee(event)}>

                {formErrors === "" && submit ? (
                    <div className="ui message success">Update success</div>
                ) : (
                    <div id="error"></div>
                )}

                    <Form.Group className="col-12">
                    <h2 style={{textAlign:'center'}}> <b>Student Profile Update</b></h2>
                    </Form.Group>

                    <Form.Group className="col-12">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="email"
                            name="name"
                            value={edits.email}
                            onChange={EditDetails}
                            readOnly>
                        </Form.Control>
                    </Form.Group>
                    <br/>
                    <Form.Group className="col-12">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="name"
                            value={edits.name}
                            onChange={EditDetails}
                            required>
                        </Form.Control>
                    </Form.Group>
                    <br/>
                    <Form.Group className="col-12">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="date"
                            name="dob"
                            value={edits.dob}
                            onChange={EditDetails}
                            required>
                        </Form.Control>
                    </Form.Group>
                    <br/>
                    <Form.Group className="col-12">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="mobile"
                            value={edits.mobile}
                            onChange={EditDetails}
                            required>
                        </Form.Control>
                    </Form.Group>
                    <br/>
                    <Form.Group className="col-12">
                        <Form.Label>Subjects</Form.Label>
                        <Form.Select
                            className="input-control"
                            name="subjects"
                            value={edits.subjects}
                            onChange={EditDetails}
                            required>
                                <option value="" defaultValue>--select--</option>
                                <option value="Maths">Maths</option>
                                <option value="Science">Science</option>
                                <option value="History">History</option>
                                <option value="Sinhala">Sinhala</option>
                                <option value="Buddhism">Buddhism</option>
                                <option value="Music">Music</option>
                                <option value="English">English</option>
                                <option value="Health Science">Health Science</option>
                                <option value="ICT">ICT</option>
                        </Form.Select>
                    </Form.Group>
                    <br/>
                    <Form.Group className="col-12">
                        <Button className="btn btn-success btn-lg" id="button" type="submit">Submit</Button>
                    </Form.Group>

                </Form>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>     
    )
}

export default StudentProfileUpdate;