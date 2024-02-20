import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import '../App.css';

const Users = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => setAlbums(data));
    }, []);

    return (
        <>
            <div>
                <Header />
                <h3>Album List</h3>
                <div>  
                    {albums.map((album) => (
                        <Album
                            key={album.id}
                            id={album.id}
                            title={album.title}
                            userId={album.userId}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

const Album = ({ id, title, userId }) => {
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
                            <span className="label">Title:</span>
                            <span>{title}</span>
                        </div>
                        <div className="user-info">
                            <span className="label">User ID:</span>
                            <span>{userId}</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Users;
