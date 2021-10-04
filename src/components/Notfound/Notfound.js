import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {

    const img = `https://error404.fun/img/full-preview/1x/13.png`;

    return (
        <div className="container mt-5">

            <div className="wrapper d-flex flex-column">

                <img className="d-block mx-auto" width="900px" src={img} alt="404" />
                <h1 className="text-center mb-5 fw-bold">Page Not <span className="text-primary h1 fw-bold">Found</span></h1>

                <div className=" mx-auto" >
                    <Link to="/home">
                        <button className="btn btn-primary ">Back To Home</button>
                    </Link>
                </div>

            </div>

        </div >
    );
};

export default Notfound;
