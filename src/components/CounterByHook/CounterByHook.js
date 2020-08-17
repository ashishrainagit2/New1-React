import React, {useState, useEffect} from "react";
import {Button, Container, Row, Col} from "react-bootstrap";

function ApiByHook() {
  const [counter, counterIncrementer] = useState(0);

  useEffect(() => {
    document.title = `Clck : ${counter} times!`;
  });

  return (
    <Container>
        <Row>
            <Col sm={12} >
            <p>This counter uses Hooks!</p>
            </Col>

            <Col sm={12}>
              <p data-testid="count">Counter :{"  "} {counter }</p>
            </Col>

            <Col sm={12}> 
              <Button onClick={() => counterIncrementer(counter + 1)}>
                Increment Me
              </Button>
            </Col>

        </Row>
      </Container>
  );
}

export default ApiByHook;
