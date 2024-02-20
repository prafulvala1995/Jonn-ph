import React, { useEffect, useState } from 'react'
import { Row , Col } from 'react-bootstrap';
import Header from './Header';
import '../App.css';



const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(data => setUsers(data));
            
    }, []);
    console.log(users);
    return (
        <>
            <div>
                <Header></Header>
                <h3>User List </h3>
                <div>
                    {
                        users.map((user) =>(
                            <User
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                username={user.username}
                                email={user.email}
                                phone={user.phone}
                                website={user.website}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    )
}


const User = ({ id, name, username, email , phone , website , address , company }) => {

    return (
        <div className='container'>

            <div className='mt-4  user-container'>
                <Row>
                    <Col>                  
                        <div className="user-info">
                            <span className="label">ID:</span>
                            <span>{id}</span>
                        </div>
                        <div className="user-info">
                            <span className="label">Name:</span>
                            <span>{name}</span>
                        </div>
                        <div className="user-info">
                            <span className="label">Username:</span>
                            <span>{username}</span>
                        </div>
                        <div className="user-info">
                            <span className="label">Email:</span>
                            <span>{email}</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="user-info">
                            <span className="label">Address:</span>
                            <span>{address}</span>
                        </div>
                        <div className="user-info">
                            <span className="label">Phone:</span>
                            <span>{phone}</span>
                        </div>
                        <div className="user-info">
                            <span className="label">Website:</span>
                            <span>{website}</span>
                        </div>
                        <div className="user-info">
                            <span className="label">Company:</span>
                            <span>{company}</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
  };
  
export default Users