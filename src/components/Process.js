import React, { Component } from "react";
import "./../css/Process.css";
import { Popover, PopoverBody, PopoverHeader, Container } from "mdbreact";

class Process extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
          <div style={{ display: "flex" }}>
            <Popover
              component="button"
              placement="top"
              popoverBody="Choose your design"
              className="btn btn-default"
            >
              <PopoverHeader>Choose your design</PopoverHeader>
              <PopoverBody>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </PopoverBody>
            </Popover>
            <Popover
              component="button"
              placement="top"
              popoverBody="Upload your .STL file"
              className="btn btn-default"
            >
              <PopoverHeader>Upload your .STL file</PopoverHeader>
              <PopoverBody>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </PopoverBody>
            </Popover>
            <Popover
              component="button"
              placement="top"
              popoverBody="Choose your print specification"
              className="btn btn-default"
            >
              <PopoverHeader>Choose your print specification</PopoverHeader>
              <PopoverBody>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </PopoverBody>
            </Popover>
            <Popover
              component="button"
              placement="top"
              popoverBody="Your design ready to print"
              className="btn btn-default"
            >
              <PopoverHeader>Your design ready to print</PopoverHeader>
              <PopoverBody>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </PopoverBody>
            </Popover>
          </div>
        </Container>
      </div>
    );
  }
}

export default Process;
