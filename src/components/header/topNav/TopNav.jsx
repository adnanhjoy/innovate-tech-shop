import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaGift, FaUserAlt } from "react-icons/fa";
import { MdFlashOn } from "react-icons/md";

const TopNav = () => {
    return (
        <Navbar expand="lg" className="bg-black-100 py-3">
            <Container fluid>
                <Navbar.Brand className='text-white'>
                    <Link className='text-decoration-none text-white fw-bold'>Innovate</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className='bg-white fs-6 p-0'/>
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex" style={{ width: '40em' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-5 d-none d-md-block"
                            aria-label="Search"
                        />

                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='text-decoration-none me-5 d-none d-md-block'>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <FaGift className='text-orange fs-4'></FaGift>
                                <div className='text-white d-flex flex-column'>
                                    <span>Offer</span>
                                    <span className='text-secondary' style={{ fontSize: '12px' }}>Latest Offer</span>
                                </div>
                            </div>
                        </Link>
                        <Link className='text-decoration-none me-5 d-none d-md-block'>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <MdFlashOn className='text-orange fs-4'></MdFlashOn>
                                <div className='text-white d-flex flex-column'>
                                    <span>Deal</span>
                                    <span className='text-secondary' style={{ fontSize: '12px' }}>Special Deal</span>
                                </div>
                            </div>
                        </Link>
                        <Link className='text-decoration-none me-5 d-none d-md-block'>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <FaUserAlt className='text-orange fs-4'></FaUserAlt>
                                <div className='text-white d-flex flex-column'>
                                    <span>Account</span>
                                    <Link to='/login' className='text-secondary text-decoration-none' style={{ fontSize: '12px' }}>Login</Link>
                                </div>
                            </div>
                        </Link>
                    </Nav>

                </Navbar.Collapse>
                <button className='btn btn-primary d-none d-md-block'>Pc Builder</button>
            </Container>
        </Navbar>
    );
};

export default TopNav;