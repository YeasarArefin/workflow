import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="row gx-x" style={{ marginTop: "180px" }}>

                <div className="col-md-6 col-10 mx-auto" >

                    <form action="">

                        <div className="mb-3"
                        >
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Enter Your Full Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" /></div>

                        <div className="mb-3">

                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Enter Your Phone Number</label>
                            <input type="phone" className="form-control" id="exampleFormControlInput1" placeholder="+ 880" /></div>

                        <div className="mb-3">

                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Email Address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /></div>

                        <div className="mb-3">

                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Massege</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write Us" rows="3">
                            </textarea></div>
                        <div className="col-12"><button className="btn btn-outline-primary" type="submit">Submit form</button></div>

                    </form>

                </div>

                <div className="col-md-6 header-img">

                    <img className=" img fluid" src="https://ksdevware.com/classroom/img/log.svg" alt="go" />

                </div>

            </div>
        </div>
    );
};

export default Contact;
