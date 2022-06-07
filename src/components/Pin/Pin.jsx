import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container , Form , Button } from "react-bootstrap";

const Pin = () => {
  return (
  <>
      <Container className="container-sm bg-info dp-flex" style={{width: "438px", height: "844px"}}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Warung Makan Ijo, Bimomartani</Form.Label>
            <Form.Control type="password" placeholder="335428"/>
            
            {/* <Button.Group aria-label="Basic example">
              <Button variant="secondary">1</Button>
              <Button variant="secondary">2</Button>
              <Button variant="secondary">3</Button>
            </Button.Group> */}

            <p>Ketik Pin</p>
            
                        {/* <Card style={{ width: '18rem' }}>
                          <Card.Body>
                            <Card.Title>Ketik PIN</Card.Title>
                            <Button.Group>
                              <Button variant="primary" size="lg">1</Button>
                              <Button variant="primary">2</Button>
                              <Button variant="primary">3</Button>
                            </Button.Group>
                              </Card.Body>
                              </Card> */}
              <Button type="submit" variant="outline-success" size="lg">Konfirmasi</Button>

              </Form.Group>
              </Form>
              </Container>

      </>
  );
};

export default Pin;