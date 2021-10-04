import React, { useEffect, useState } from 'react';
import Coursecart from '../Coursecart/Coursecart';
import Skeliton from '../Skeliton/Skeliton';
import data from '../DB/data.json';

const Services = () => {


    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState(data);


    useEffect(() => {

        fetch(`./data.json`)
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 3000);

    }, []);

    const handleOnChange = (e) => {

        const searchText = e.target.value;
        const matched = courses.filter(course => course.courseName.toLowerCase().includes(searchText.toLowerCase()));
        setDisplay(matched);
    };

    return (
        <div className="container" style={{ marginTop: "100px" }}>

            <h1 className="text-center mb-5">Our All <span className="text-primary h1"> Courses</span></h1>

            <div className="row">

                <div className="col-md-6 mx-auto mb-5">

                    <div className="input-group mb-3">
                        <input onChange={handleOnChange} type="text" className="form-control" placeholder="Course Name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>

            </div>

            <div className="row">

                {
                    display.map(course => loading ? <Skeliton key={Math.random()} /> : <Coursecart key={course.courseName} course={course} />)
                }

            </div>

        </div>
    );
};

export default Services;
