import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import SignInForm from "./SignInForm";

const SignIn = () => {
	return (
		<div className="sign-in vertical-center">
			<Container>
				<Row className="justify-content-md-center">
					<Col md="auto" className="login-form">
						<Card>
							<Card.Body>
								<h1 className="text-center mb-4">Sign In</h1>
								<SignInForm />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SignIn;
