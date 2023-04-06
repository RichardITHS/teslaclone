import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import { useSelector } from 'react-redux'
import { selectCars } from './features/menu/carSlice'

function App() {
    const cars = useSelector(selectCars)

    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            className="logo"
                            src="/images/0x0-Tesla_Wordmark_20_Black.png"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {cars &&
                                cars.map((car: string, index: string) => (
                                    <Link key={index} id="Nav.Link" to={'/'}>
                                        {car}
                                    </Link>
                                ))}
                        </Nav>
                        <Nav>
                            <Link id="Nav.Link" to={'/'}>
                                Model Y
                            </Link>
                            <Link id="Nav.Link" to={'/about'}>
                                About
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default App
