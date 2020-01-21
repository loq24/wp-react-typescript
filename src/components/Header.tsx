import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserSelector, authSelector } from 'selectors';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Toggle from 'components/Toggle/Toggle';
import { unAuthUser } from 'actions';

type AdminHeaderProps = {
  children: React.ReactNode;
};

const AdminHeader: React.FC<AdminHeaderProps> = React.memo(({ children }) => {
  const isAuthenticated = useSelector(authSelector);
  const currentUser = useSelector(currentUserSelector);
  const dispatch = useDispatch();

  const unAuthUserCallback = () => {
    dispatch(unAuthUser());
  };

  return (
    <Navbar className="main-navbar">
      <div className="children-area" data-test="children-area">
        {children}
      </div>
      <Navbar.Collapse className="justify-content-end">
        <Toggle />
        {isAuthenticated ? (
          <>
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
          </>
        ) : (
          <Link to="/signin">Login</Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
});

export default AdminHeader;
