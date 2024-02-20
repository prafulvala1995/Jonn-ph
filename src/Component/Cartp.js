import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Cartp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: [],
            status: false
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            
            .then(response => response.json())
            .then(json => this.setState({ val: json, status: true }));
    }

    render() {
        const { val, status } = this.state;

        if (status) {
            // checking if this is working or not
            return (
                <>
                {/* new branches and commit */}
                    <h3>Post Page</h3>
                    <Container>
                        <Row className='user-container'>
                            {
                                val.map((item) => (
                                    <Col md={3} className='border' key={item.id}>
                                        <div>
                                            <Card.Body className='m-2'>
                                                <Card.Title>{item.id}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{item.title}</Card.Subtitle>
                                                <Card.Text>
                                                    {item.body}
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </>
            );
        } else {
            return (
                <div className=' mt-5'>
                    <h1 className='mt-4'> Loading Page...</h1>
                </div>
            );
        }
    }
}

export default Cartp;

