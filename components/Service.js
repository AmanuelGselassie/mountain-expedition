  import React from 'react';
  import { Container, Row, Col } from "reactstrap";
  import Logos from '../public/assets/logos.png';
  import Image from 'next/image'

  const Service = () => {

    return (
      <section className="section img-fluid d-flex align-items-center justify-content-center position-relative" id="service"   style={{background:'linear-gradient(rgb(0 130 170 / 0%),rgb(0 0 0 / 87%)), url(../assets/pngwing6.png)', backgroundSize: 'cover'}}>
      <div className="container">
        <div className="row top">
          <div className="col-12 "></div>
            <div className="banner-full">
              <div style={{width: 140, margin: '70px auto'}}>
                <Image
                  layout="responsive"
                  src={Logos}
                  alt="blank"
                  width={50}
                  height={50}
                  className=""
                />
                </div>
                  <div className="service-text"> 
                      <div>Expedition leaders</div>
                      <div className="service-sub">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h5>
                      </div>
                  </div>
            </div>
            </div>
            </div>
      </section>
    );
  }

  export default Service;
