import React from 'react'
import { useState } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap'


const NavBar = ({ addMovie }) => {

    const [text, setText] = useState("");
  




    return (
        <div>


            <Navbar bg="light" expand="lg">

                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Form className="d-flex" style={{ width: '500px' }}>
                            
                            <Form.Control
                                type="Add Movie"
                                placeholder="Add Movie"
                                className="me-auto p-1"
                                aria-label="Add Movie"
                                onChange={(e) => setText(e.target.value)}
                            />

                            <Button onClick={() => addMovie(text)(alert("new movies created :" + text))



                            } variant="outline-success" style={{ width: '300px' }} >ADD New MOVIE</Button>
                        </Form>

                       

                    </Nav>
                    

                </Navbar.Collapse>

            </Navbar>




        </div>
    )
}

export default NavBar