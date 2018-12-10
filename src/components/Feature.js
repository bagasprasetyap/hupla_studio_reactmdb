import React, { Component } from "react";
import card1 from "./../img/design1.jpg";
import card2 from "./../img/design2.jpg";
import {
  Col,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Row
} from "mdbreact";

class Feature extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
          <Row>
            <Col md="6">
              <Card style={{ width: "25rem", borderRadius: "30px" }}>
                <CardImage
                  className="img-fluid "
                  style={{ borderRadius: "30px" }}
                  src={card1}
                  waves
                />
                <CardBody>
                  <CardTitle className="text-center">
                    Print your own design
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vel est quam. Nunc lobortis, orci ac faucibus
                    iaculis, mauris tortor maximus risus, sed tempus justo neque
                    vel eros.
                  </CardText>
                  <Button color="unique" className="mx-auto d-block">
                    Let's Print!
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card style={{ width: "25rem", borderRadius: "30px" }}>
                <CardImage
                  className="img-fluid"
                  style={{ borderRadius: "30px" }}
                  src={card2}
                  waves
                />
                <CardBody>
                  <CardTitle className="text-center">
                    Print our design
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vel est quam. Nunc lobortis, orci ac faucibus
                    iaculis, mauris tortor maximus risus, sed tempus justo neque
                    vel eros.
                  </CardText>
                  <Button color="unique" className="mx-auto d-block">
                    Let's Print!
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Feature;
