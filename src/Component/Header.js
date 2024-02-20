import React from 'react';
import { Container, Nav, Navbar, Form,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold fs-3 mainlogo'><Link to='/'>Json Placeholder</Link></Navbar.Brand>
                    <Form className="d-flex order-lg-last">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-secondary">Search</Button>
                    </Form>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='txt'><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link className='txt'><Link to='/comments'>Comments</Link></Nav.Link>
                            <Nav.Link className='txt'><Link to='/albums'>Albums</Link></Nav.Link>
                            <Nav.Link className='txt'><Link to='/photos'>Photos</Link></Nav.Link>
                            <Nav.Link className='txt'><Link to='/todos'>Todos</Link></Nav.Link>
                            <Nav.Link className='txt'><Link to='/users'>Users</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default  Header;
