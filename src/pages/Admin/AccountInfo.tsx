import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useWpSelector } from 'selectors';

const AccountInfo = () => {
  const { currentUser } = useWpSelector();

  return (
    <>
      <h1>Account Info</h1>
      <Container className="mt-3">
        <Row className="mb-3">
          <Col sm={1}>Name</Col>
          <Col sm={9} data-test="user-name">
            {currentUser ? currentUser.name : '...'}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={1}>Bio</Col>
          <Col sm={9} data-test="user-bio">
            {currentUser ? currentUser.description : '...'}
          </Col>
        </Row>
        <Row>
          <Col sm={1}>Website</Col>
          <Col sm={9} data-test="user-website">
            <a href={currentUser ? currentUser.url : ''}>
              {currentUser ? currentUser.url : '...'}
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AccountInfo;
