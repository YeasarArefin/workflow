import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Faq from '../../Faq/Faq';
import Coursecart from '../Coursecart/Coursecart';
import Skeliton from '../Skeliton/Skeliton';
import './Header.css';

const Header = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        fetch(`./data.json`)
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);

    useEffect(() => {

        setLoading(false);

        setTimeout(() => {
            setLoading(true);
        }, 3000);

    }, []);

    return (
        <div className="container">

            <div className="row gx-5" style={{ marginTop: "200px", marginBottom: "150px" }}>

                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h2 className="mb-3">Welcome to <span className="text-primary h2">Landkit.</span> <br />
                            Develop anything.</h2>

                        <p className="text-secondary mb-5 w-75">Build a beautiful, modern website with flexible Bootstrap components built from scratch.</p>

                        <Link to="/services">

                            <button className="btn btn-primary me-2">View All Courses</button>

                        </Link>

                        <Link to="/contact">

                            <button className="btn text-primary" style={{ backgroundColor: 'rgba(51, 94, 234, .1)' }}>Contact Here</button>

                        </Link>

                    </div>

                </div>

                <div className="col-md-6 header-img">

                    <img className="img-fluid" src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png" alt="header img" />

                </div>

            </div>

            <div className="row gx-5 my-5">

                <div className="col-md-4">

                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA"></path><path d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA" opacity=".3"></path></g></svg>

                    <h3>Built for developers</h3>
                    <p>Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>

                </div>
                <div className="col-md-4">

                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#335EEA"></path><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#335EEA" opacity=".3"></path></g></svg>

                    <h3>Built for developers</h3>
                    <p>Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>

                </div>
                <div className="col-md-4">

                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>

                    <h3>Built for developers</h3>
                    <p>Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>

                </div>

            </div>

            <div className="row gx-lg-5 ">

                <h2 className="my-5 text-center">Our Best <span className="text-primary h2 fw-bold">Courses</span></h2>

                <div className="row" style={{ marginBottom: "100px" }}>

                    {
                        courses.slice(0, 4).map(course => !loading ? <Skeliton key={Math.random()} /> : <Coursecart key={course.courseName} course={course} />)

                    }

                </div>

            </div>

            <Faq />

        </div >
    );
};

export default Header;
