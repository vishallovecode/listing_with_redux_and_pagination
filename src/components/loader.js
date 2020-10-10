import React from "react";
import { Container, Row, Col } from "shards-react";
 

const Loader = () => (
  <Container fluid className="main-content-container px-4">
    <Row>      
      <Col lg="12" md="12" sm="12" className="mb-4 mt-4 text-center">
        <img src="/loader.gif"   className='loader'/>
      </Col>
    </Row>
  </Container>
);


export default Loader;
