import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import { useHistory } from "react-router-dom";
const User = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    const { users } = useSelector(state => state.data);
    useEffect(() => {
        dispatch(loadUsers());
    }, [])
    const handleDelete = (id) => {
        if (window.confirm("Are you sure wanted to delete the user ?")) {
            dispatch(deleteUser(id));
        }
    };
    return (
        <>
            <Container>
                <div className="buttonstyles my-5 d-flex">
                    <Button variant="contained" className="btn btn-success ms-auto"
                        onClick={() => history.push("/addUser")}>
                        + Add user</Button>
                </div>

                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th className='text-center'>#</th>
                            <th>Users</th>
                            <th className='text-center'>Age</th>
                            <th className='text-center'>City</th>
                            <th className='text-center'>Gender</th>
                            <th className='text-center'>Salary</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((each) => (
                                <tr>
                                    <td className='text-center'>{each.id}</td>
                                    <td>{each.userName}</td>
                                    <td className='text-center'>{each.age}</td>
                                    <td className='text-center'>{each.city}</td>
                                    <td className='text-center'>{each.gender}</td>
                                    <td className='text-center'>{each.salary}</td>
                                    <td className='text-center'>
                                        <Button className="btn btn-primary me-2"
                                            onClick={() => handleDelete(each.id)}>
                                            Delete</Button>
                                        <Button className="btn btn-danger" onClick={() => history.push(`/editUser/${each.id}`)}>Edit</Button>{' '}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
export default User;
