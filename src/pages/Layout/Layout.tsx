import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Dashboard
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://github.com/loq24/wp-react-typescript"
            >
              Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Header>

      <Container className="main-container">{children}</Container>
    </div>
  );
};

export default Layout;
