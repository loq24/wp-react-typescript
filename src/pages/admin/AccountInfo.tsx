import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppState } from "../../reducers";

const AccountInfo = () => {
	const currentUser = useSelector((state: AppState) => state.wp.currentUser);
	console.log("Current User", currentUser);

	return (
		<>
			<h1>Account Info</h1>
			<Container className="mt-3">
				<Row className="mb-3">
					<Col sm={1}>Name</Col>
					<Col sm={9}>{currentUser ? currentUser.name : "..."}</Col>
				</Row>
				<Row className="mb-3">
					<Col sm={1}>Bio</Col>
					<Col sm={9}>{currentUser ? currentUser.description : "..."}</Col>
				</Row>
				<Row>
					<Col sm={1}>Website</Col>
					<Col sm={9}>
						<a href={currentUser ? currentUser.url : ""}>
							{currentUser ? currentUser.url : "..."}
						</a>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AccountInfo;
