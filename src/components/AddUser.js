import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

const AddUser = () => {
  const [state, setState] = useState({
    userName: "",
    age: "",
    city: "",
    gender: "",
    salary: "",
  });

  const [error, setError] = useState("");

  let history = useHistory();
  let dispatch = useDispatch();
  const { userName, age, city, gender, salary } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !age || !city || !gender || !salary) {
      setError("Please provide all the input fields");
    }
    else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };

  return (<>
    <Container>
      <div className="buttonstyles my-5 d-flex">
        <Button variant="contained" className="btn btn-secondary"
          onClick={() => history.push("/")} >
          Go Back </Button>
      </div>
      <h3>Add User</h3>
      {error && <h4 className='text-danger'>{error}</h4>}
      <Form onKeyPress={(e) => { e.target.keyCode === 13 && e.preventDefault(); }} className="mt-3">
        <Form.Group className="mb-3">
          <Form.Control type="text" label="User Name"  placeholder="User Name" name="userName" defaultValue="" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" onChange={handleInputChange} name="age" placeholder="Age" defaultValue="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" onChange={handleInputChange} name="city" placeholder="City" defaultValue="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" onChange={handleInputChange} name="gender" placeholder="Gender" defaultValue="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" onChange={handleInputChange} placeholder="Salary" name="salary" defaultValue="" />
        </Form.Group>
        <Button variant="contained" className="btn btn-primary" onClick={handleSubmit} >
          Submit</Button>
      </Form>
    </Container>
  </>
  )
};

export default AddUser;
