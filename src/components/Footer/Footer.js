import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-around align-items-center h-10 fixed-bottom shadow-md" style={{ backgroundColor: "#eee" }}>

                <div>&copy; 2021 <span className="text-primary">Workflow.</span> All Rights Reserved.</div>

                <div className="flex">
                    <Link to="/privacy" className="mr-5 text-gray-600">Privacy</Link>
                    <Link to="/terms" className="mr-5 text-gray-600">Terms</Link>
                    <Link to="/feedback" className="mr-5 text-gray-600">Feedback</Link>
                    <Link to="/support" className="text-gray-600">Support</Link>
                </div>

            </div>
        </>
    );
};

export default Footer;
