import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, getSingleUser } from '../redux/actions';

const EditUser = () => {
  const [state, setState] = useState({
    userName: "",
    age: "",
    city: "",
    gender: "",
    salary: "",
  });

  const [error, setError] = useState("");
  let { id } = useParams();
  const { user } = useSelector((state) => state.data);
  let history = useHistory();
  let dispatch = useDispatch();
  const { userName, age, city, gender, salary } = state;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

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
      dispatch(updateUser(state, id));
      history.push("/");
      setError("");
    }
  };

  return (
    <>
      <Container>
        <div className="buttonstyles my-5 d-flex">
          <Button variant="contained" className="btn btn-secondary" onClick={() => history.push("/")} >
            Go Back</Button>
        </div>
        <h3>Edit User</h3>
        {error && <h4 className='text-danger'>{error}</h4>}
        <Form onKeyPress={(e) => { e.target.keyCode === 13 && e.preventDefault(); }}>
          <Form.Group className="mb-3">
            <Form.Control type="text" label="User Name" name="userName" placeholder="User Name" defaultValue={userName} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" onChange={handleInputChange} placeholder="Age" name="age" defaultValue={age} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" onChange={handleInputChange} placeholder="City" name="city" defaultValue={city} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" onChange={handleInputChange} placeholder="Gender" name="gender" defaultValue={gender} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" onChange={handleInputChange} placeholder="Salary" name="salary" defaultValue={salary} />
          </Form.Group>
          <Button variant="contained" className="btn btn-primary"
            style={{ width: "100px" }} onClick={handleSubmit} >
            Update</Button>
        </Form>
      </Container>

    </>
  )
};

export default EditUser;
