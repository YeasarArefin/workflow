import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div class="row gx-x" style={{ marginTop: "180px" }}>

                <div class="col-md-6 col-10 mx-auto" >

                    <form action="">

                        <div class="mb-3"
                        >
                            <label for="exampleFormControlInput1" class="form-label">
                                Enter Your Full Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" /></div>

                        <div class="mb-3">

                            <label for="exampleFormControlInput1" class="form-label">
                                Enter Your Phone Number</label>
                            <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="+ 880" /></div>

                        <div class="mb-3">

                            <label for="exampleFormControlInput1" class="form-label">Enter Your Email Address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /></div>

                        <div class="mb-3">

                            <label for="exampleFormControlTextarea1" class="form-label">Massege</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write Us" rows="3">
                            </textarea></div>
                        <div class="col-12"><button class="btn btn-outline-primary" type="submit">Submit form</button></div>

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
