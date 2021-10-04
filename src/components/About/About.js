import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container d-flex" style={{ marginTop: "180px" }} >

            <div className=" row gx-5">
                <div className="col-md-6">

                    <h1 className="text-center">About <span className="text-primary h1 ">Us</span></h1>

                    <p className="text-gray-600 mt-5 mb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                    <p className="text-gray-600 mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur?</p>

                    <div className="text-center">

                        <Link to="/home">
                            <button className="btn btn-primary">Back To Home</button>
                        </Link>

                    </div>

                </div>

                <div className="col-md-6 header-img">

                    <img className="img-fluid" src="https://www.egnoto.com/wp-content/themes/egnoto/assets/images/cms.svg" alt="abot page" />

                </div>

            </div>
        </div>
    );
};

export default About;
