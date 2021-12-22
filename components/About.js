  import React from 'react';
  import Image from 'next/image'
  import { Container, Row, Col } from "reactstrap";
  import Pex1 from '../public/assets/pex1.jpg';
  import Pex3 from '../public/assets/pex3.jpg';
  import Pex4 from '../public/assets/pex4.jpg';
  const About = () => {

    return (
      <section className="section bg-light d-flex align-items-center justify-content-center pad-bottom" id="about"   style={{backgroundImage: 'url(../assets/lastmou.jpg)', backgroundSize: 'cover'}}>
      <div className="container">
        <div class="row top">
          <div className="col-12 col-md-4">
            <div className="card-wrapper first">
              <Image
                layout="responsive"
                objectFit="cover"
                src={Pex1}
                width={416}
                height={416}
                className=""
              />
              <div className="title h3 text-white tit-tex">
                {'Expedition Ready'}
              </div>
              <div className="description text-white">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
              </div>
              <div className="btn btn-sec">
              <button type="button" >Read more<span className="right-icon ml-2">&#8594;</span></button>
              </div>

            </div>
          </div>
          <div className="col-12 col-md-4" style={{marginTop: '7rem'}}>
            <div className="card-wrapper position-relative second">
              <Image
                layout="responsive"
                src={Pex3}
                 width={416}
                 height={416}
                className=""
                objectFit="cover"
               

              />
            <div className="title h3 text-white tit-tex">
                {'Articles'}
              </div>
              <div className="description text-white">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
              </div>
              <div className="btn btn-sec">
              <button type="button" >Read more<span className="right-icon ml-2">&#8594;</span></button>
              </div>
              </div>
          </div>
          <div className="col-12 col-md-4">
          <div className="card-wrapper thrid">
            <Image
              layout="responsive"
              src={Pex4}
              width={416}
              height={416}
              className=""
              objectFit="cover"
            />
            <div className="title h3 text-white tit-tex">
                {'Blog'}
              </div>
              <div className="description text-white">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
              </div>
              <div className="btn btn-sec">
              <button type="button" >Read more<span className="right-icon ml-2">&#8594;</span></button>
              </div>
              </div>
          </div>
          
        
        </div>
      </div>
  
      </section>
    );
  }

  export default About;
