import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-md" style={{ marginBottom: '100px' }}>
                <div className="container">
                    <NavLink className="navbar-brand text-primary fw-bold" to="/home"><span className="h2">Workflow.</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#0b5ed7"
                                }} className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#0b5ed7"
                                }} className="nav-link" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item ">
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#0b5ed7"
                                }} className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item me-5 ">
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#0b5ed7"
                                }} className="nav-link" to="/contact">Contact</NavLink>
                            </li>


                        </ul>
                        <form className="d-flex">

                            <Link to="/services">

                                <button className="btn btn-primary" type="submit">Buy now</button>

                            </Link>

                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
