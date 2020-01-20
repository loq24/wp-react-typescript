import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserSelector } from 'selectors';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Toggle from 'components/Toggle/Toggle';
import { unAuthUser } from 'actions';

const AdminHeader: React.FC = React.memo(() => {
  const currentUser = useSelector(currentUserSelector);
  const dispatch = useDispatch();

  const unAuthUserCallback = () => {
    dispatch(unAuthUser());
  };

  return (
    <Navbar className="main-navbar">
      <Link to="/">
        <Navbar.Brand data-test="tagline">
          WP React with Typescript
        </Navbar.Brand>
      </Link>
      <Navbar.Collapse className="justify-content-end">
        <Toggle />
        <Navbar.Text>
          Signed in as:{' '}
          <Link to="/admin/account">
            <span data-test="current-user-name">
              {currentUser ? currentUser.name : '...'}
            </span>
          </Link>
        </Navbar.Text>
        <Navbar.Text className="ml-3">
          <Button
            onClick={unAuthUserCallback}
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
});

export default AdminHeader;
