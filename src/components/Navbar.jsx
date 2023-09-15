import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar bg="danger" variant="dark" expand="lg" className="fixed-top">
                <Container>
                    <div className="d-flex justify-content-between w-100">
                        <div className="d-flex">
                            <Link to="/" className="nav-link text-white text-decoration-none">
                                Home 🏠
                            </Link>
                            <Link to="/contacto" className="nav-link text-white text-decoration-none">
                                Contacto 📝
                            </Link>
                            <Link to="/delivery" className="nav-link text-white text-decoration-none">
                                Delivery 🏍️
                            </Link>
                        </div>
                        <Navbar.Brand>
                            Happy Cake <span role="img" aria-label="cake">🍰</span>
                        </Navbar.Brand>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}
