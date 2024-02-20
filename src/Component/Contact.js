import React, { Component } from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch photos');
                }
                return response.json();
            })
            .then(json => {
                this.setState({ photos: json, isLoading: false });
            })
            .catch(error => {
                this.setState({ error, isLoading: false });
            });
    }

    render() {
        const { photos, isLoading, error } = this.state;

        if (isLoading) {
            return <div>
                        <h2> Loading...</h2>
                    </div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <>
                <Header />
                <h3>Photos Page</h3>
                <Container>
                    <Row className='user-container'>
                        {photos.map(photo => (
                            <Col md={3} className='border' key={photo.id}>
                                <div>
                                    <Card.Body className='m-2'>
                                        <Card.Title>{photo.id}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{photo.title}</Card.Subtitle>
                                        <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} />
                                        <Card.Text>
                                            <a href={photo.url} target="_blank" rel="noopener noreferrer">{photo.url}</a>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}


