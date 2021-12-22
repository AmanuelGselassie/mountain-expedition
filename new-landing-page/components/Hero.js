  import React from 'react';
  import Logos from '../public/assets/logos.png';
  import Image from 'next/image';

  import { Container, Row, Col } from 'reactstrap';

  const Hero = () => {
    return (
      <section className="svg section position-relative">
        <div className="logo" style={{backgroundImage: 'url(../assets/logo.png)'}}></div>{/* <svg viewBox="0 0 1440 320" className="position-absolute"><path fill="#ffffff" fill-opacity="1" d="M0,192L720,128L1440,288L1440,320L720,320L0,320Z"></path></svg> */}        
          <div className="banner-full img-fluid1" style={{backgroundImage: 'url(../assets/mountains1.jpg)' }} >
            <div className="banner-text">
                <Image
                  src={Logos}
                  width={120}
                  height={120}
                  className=""
                />
              <div className="banner-small">
                <h1 className="banner-med" > Welcome To Mountain </h1>
                  <h1 className="banner-small">Expedition Club!</h1></div>
                <p style={{lineHeight: "27px", fontSize: "20px", fontWeight: 'bolder', marginTop: "12px"}}>Overseas Expeditions, UK Mountain Challenges<br/> Private guiding & Instruction. </p>
             </div>
          </div>
      </section>
    
    );
  }

  export default Hero;
  