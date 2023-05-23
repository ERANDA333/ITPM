import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import '../css/styles.css'

function StudentRegistration() {

    const [formValues, setFormValues] = useState({
        name: "",
        dob: "",
        email: "",
        password: "",
        mobile: "",
        subjects: "",
        gender: "",
        registerDate: ""
    });
    const [formErrors, setFormErrors] = useState("");
    const [submit, setSubmit] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues({ ...formValues, [name]: value});
    }

    const SaveStudents = (event) => {
        event.preventDefault();

        if (formErrors === "") {
            setSubmit(true);
            let email = formValues.email;

            axios.post("http://localhost:5000/api/student/", formValues).then((res) => {
                console.log(res)
                if (res.status === 200) {
                    const errors = res.data;
                    setFormErrors(errors);
                } else {
                    localStorage.setItem("email", email);
                    navigate("/");
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <div className="chef-container">
        <div className="container pt-7">
        <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-5"> 
        <div className="wrapper">
            <Form className="form" onSubmit={SaveStudents}>

            {formErrors === "" && submit ? (
                <div className="ui message success"></div>
            ) : (
                <div id="error">{formErrors}</div>
            )}
                <Form.Group className="col-12">
                    <h2 style={{textAlign:'center'}}> <b>Student Register</b></h2>
                </Form.Group>

                <Form.Group className="col-12">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="name"
                        onChange={handleChange}
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
                        onChange={handleChange}
                        required>
                    </Form.Control>
                </Form.Group>
                <br/>
                <Form.Group className="col-12">
                    <Form.Label>E-mail Address</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        required>
                    </Form.Control>
                </Form.Group>
                <br/>
                <Form.Group className="col-12">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="password"
                        name="password"
                        onChange={handleChange}
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
                        onChange={handleChange}
                        required>
                    </Form.Control>
                </Form.Group>
                <br/>
                <Form.Group className="col-12">
                    <Form.Label>Subjects</Form.Label>
                    <Form.Select
                        className="input-control"
                        name="subjects"
                        value={formValues.subjects}
                        onChange={handleChange}
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
                    <Form.Label>Gender</Form.Label>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-6">
                        <Form.Check
                            inline
                            label="Male"
                            name="gender"
                            value="Male"
                            onChange={handleChange}
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Female"
                            name="gender"
                            value="Female"
                            onChange={handleChange}
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        </div>
                    ))}
                </Form.Group>
                <br/>            
                <Form.Group className="col-12">
                    <Form.Label>Registration Date</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="date"
                        name="registerDate"
                        onChange={handleChange}
                        required>
                    </Form.Control>
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
    )
}

export default StudentRegistration;