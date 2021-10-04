import React from 'react';

const Coursecart = (props) => {
    const { img, courseName, courseInstructor, difficulty, instructorImg, courseDuration, Enroll, Rating } = props.course;

    return (
        <div className="col-md-4 mb-5">
            <div className="card h-100 mx-auto" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="course img" />
                <div className="card-body">
                    <p className="card-text fw-bold" style={{ height: "55px" }}>{courseName}</p>
                    <div className="d-flex">

                        <p className="me-2"><small><i className="far fa-clock"></i></small> <small>{courseDuration}</small></p>
                        <p className=" px-1 ms2 rounded-pill text-white"><small className="px-1 py-1 rounded-pill" style={{ backgroundColor: "purple" }}>{difficulty}</small></p>

                    </div>

                    <p style={{ color: 'goldenrod' }}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span className="ms-2 me-2">{Rating}</span>({Enroll})</p>

                    <hr />

                    <div className="instractor d-flex align-items-center">

                        <img width="40px" className="rounded-circle me-2" src={instructorImg} alt="" />
                        <h6 className="me-4">{courseInstructor}</h6>
                        <small><i className="fas fa-dollar-sign" style={{ display: "inline", marginRight: "5px" }}></i>300</small>
                        <i className="far fa-bookmark ms-5"></i>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Coursecart;
