import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { User } from 'actions';
import Toggle from 'components/Toggle/Toggle';

type AdminHeaderProps = {
  currentUser?: User;
  unAuthUser: () => void;
};

const AdminHeader: React.FC<AdminHeaderProps> = React.memo(
  ({ currentUser, unAuthUser }) => {
    return (
      <Navbar bg="dark" className="navbar-dark">
        <Link to="/">
          <Navbar.Brand data-test="tagline">
            WP React with Typescript
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Toggle />
          <Navbar.Text>
            Signed in as:{' '}
            <Link to="/account">
              <span data-test="current-user-name">
                {currentUser ? currentUser.name : '...'}
              </span>
            </Link>
          </Navbar.Text>
          <Navbar.Text className="ml-3">
            <Button
              onClick={() => unAuthUser()}
              title="Sign Out"
              variant="outline-light"
              className="logout-btn"
              data-test="logout-btn"
            >
              <i className="fa fa-fw fa-sign-out" />
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
);

export default AdminHeader;
