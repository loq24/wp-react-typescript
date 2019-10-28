import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Introduction = () => {
	return (
		<Jumbotron>
			<h1>Welcome!</h1>
			<p>
				This is a simple project that I developed originally{' '}
				<a
					href='https://github.com/loq24/wp-react'
					target='_blank'
					rel='noopener noreferrer'
				>
					without typescript
				</a>
				. I hated Typescript at first but as I go deeper with it while building
				this project I realized how useful and awesome it is. This is also my
				way to help other developer who are having a hard time integrating
				Typescript with their react-redux projects. You may find the source code
				of this project{' '}
				<a
					data-test='github-link'
					href='https://github.com/loq24/wp-react-typescript/'
				>
					here
				</a>
				. Any feedback is appreciated. I hope you enjoy this app!
			</p>
			<p>
				<a
					data-test='portfolio-link'
					href='https://lougiequisel.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Button variant='primary'>About Me</Button>
				</a>
			</p>
		</Jumbotron>
	);
};

export default Introduction;
