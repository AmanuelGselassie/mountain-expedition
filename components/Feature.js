import React from 'react';
import { Container, Row, Col } from "reactstrap";

    const FeatureBox = (props) => {
      return (
        <>
        <Container>
          <Row>
            <Col xs={6}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Col>
            <Col xs={6}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>
            <button type="button" className="btn btn-secondary">Read more<span className="right-icon ml-2">&#8594;</span></button>
            </Col>
          </Row>
        </Container>      
        </>
      );
    }

    const Feature = () => {

      const features = [
        {id : 1, desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", link : "/"},

      ];

      return (
        <section className="section1" id="feature">
          <div className="rowwrapper">
          <Container>
          <Row>
            <Col xs={12}>
              
            <div className="d-block"></div>


    

            </Col>
            
            
          </Row>
        </Container>   
          <Container>
            <Row className="justify-content-center rw">
              <Col lg={6} md={8}>
                <div className="title text-center mb-5">
                  <h3 className="font-weight-normal text-dark"><span className="text-mannie">About us</span></h3>
                
                </div>
              </Col>
            </Row>
            <FeatureBox features={features} />
          </Container>
        </div> 
        </section>
      );
    }

    export default Feature;