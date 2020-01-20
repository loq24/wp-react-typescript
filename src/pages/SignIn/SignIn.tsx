import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import SignInForm from './SignInForm';
import { initialFormValues } from 'utils/helpers';
import Toggle from 'components/Toggle/Toggle';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="sign-in vertical-center">
      <Toggle />
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" className="login-form">
            <Card>
              <Card.Body>
                <h1 className="text-center mb-4">Sign In</h1>
                <span className="text-muted text-center d-block mb-4">
                  Username is{' '}
                  <span data-test="username-txt">
                    {initialFormValues.username}
                  </span>{' '}
                  and password is{' '}
                  <span data-test="password-txt">
                    {initialFormValues.password}
                  </span>
                </span>
                <SignInForm accessValues={initialFormValues} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
