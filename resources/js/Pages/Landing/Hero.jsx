import React, { useState } from 'react';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className="mt-md-4">
                            <div>
                                <span className="badge badge-danger badge-pill">New</span>
                                <span className="text-white-50 ml-1">Welcome to new landing page</span>
                            </div>
                            <h2 className="text-white font-weight-normal mb-4 mt-3 hero-title">
                                Your Health Platform
                            </h2>

                            <p className="mb-4 font-16 text-white-50">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo sequi 
                                corrupti delectus molestias magnam velit corporis, illum, ea excepturi ad rerum 
                                qui perspiciatis quisquam quibusdam, eos nesciunt obcaecati fuga.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-2">
                        <div className="text-md-right mt-3 mt-md-0">
                            <img src="assets/images/startup.svg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}