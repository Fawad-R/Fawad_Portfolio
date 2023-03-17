import React, { useEffect, useState } from 'react'
import axios from "axios";
const Service = () => {
    let [state, updateState] = useState([]);
    let fetchServices = async () => {
        let val = await axios.get('/services');
        updateState(val.data);
    }
    useEffect(() => {
        fetchServices();
    }, [])

    return (
        <div>            <div className="container-fluid bg-light my-5 py-6" id="service">
            <div className="container">
                    <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-0">My Services</h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <a target="_blank" className="btn btn-primary py-3 px-5" href="https://www.upwork.com/freelancers/~015a226bc5c7d289fe">Hire Me</a>
                        </div>
                    </div>
                
                <div className="row g-4">
                {  state.map((ele,ind)=>{
                return(
                    <div key={ele._id} className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                            <div className="bg-icon flex-shrink-0 mb-3">
                                <i className="fa fa-laptop-code fa-2x text-dark"></i>
                            </div>
                            <div className="ms-sm-4">
                                <h4 className="mb-3">{ele.name}</h4>
                                <h6 className="mb-3">Start from <span className="text-primary">${ele.price}</span></h6>
                                <span>{ele.details}</span>
                            </div>
                        </div>
                    </div>)
                })}
                    {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                            <div className="bg-icon flex-shrink-0 mb-3">
                                <i className="fa fa-code fa-2x text-dark"></i>
                            </div>
                            <div className="ms-sm-4">
                                <h4 className="mb-3">Responsive Front End</h4>
                                <h6 className="mb-3">Start from <span className="text-primary">$8</span></h6>
                                <span>I will create you a reponsive front end (in react)<br /> contact me for more details. </span>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                    <div className="bg-icon flex-shrink-0 mb-3">
                        <i className="fa fa-code fa-2x text-dark"></i>
                    </div>
                    <div className="ms-sm-4">
                        <h4 className="mb-3">Web Design</h4>
                        <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                        <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                    <div className="bg-icon flex-shrink-0 mb-3">
                        <i className="fa fa-laptop-code fa-2x text-dark"></i>
                    </div>
                    <div className="ms-sm-4">
                        <h4 className="mb-3">UI/UX Design</h4>
                        <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                        <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                    </div>
                </div>
            </div> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Service