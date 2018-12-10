import React, { Component } from "react";
import "./../css/About.css";
import background from "./../img/background1.jpg";
import printer from "./../img/printer.png";
import {
  MDBView,
  MDBMask,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBContainer
} from "mdbreact";

class About extends Component {
  render() {
    return (
      <div>
        <MDBView className="d-flex justify-content-center align-items-center">
          <img src={background} alt="background" className="img-fluid" />
          <MDBMask overlay="grey-strong" className="flex-center">
            <MDBContainer>
              <MDBRow>
                <div className="black-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Print your design now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.
                  </h6>
                  <MDBBtn outline color="unique">
                    Learn More
                  </MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <img src={printer} alt="printer" className="img-fluid" />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default About;
