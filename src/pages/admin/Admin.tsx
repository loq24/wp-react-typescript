import React from 'react';
import Header from '../../components/Header';
import SidebarNav from 'components/SidebarNav/SidebarNav';
import { Navbar } from 'react-bootstrap';
import { Route, useLocation, Link } from 'react-router-dom';
import Introduction from './Introduction';
import Posts from './Posts/Posts';
import Edit from './Post/Edit/Edit';
import AddNew from './AddNew/AddNew';
import AccountInfo from './AccountInfo';
import './Admin.css';

const Admin: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="dashboard">
      <Header>
        <Link to="/">
          <Navbar.Brand data-test="tagline">
            WP React with Typescript
          </Navbar.Brand>
        </Link>
      </Header>
      <div className="admin-content">
        <SidebarNav basePath="/admin" pathName={pathname} />
        <div className="container-fluid">
          <Route path="/admin" exact component={Introduction} />
          <Route path="/admin/posts" component={Posts} />
          <Route path="/admin/post/edit/:id" component={Edit} />
          <Route path="/admin/add-new" component={AddNew} />
          <Route path="/admin/account" component={AccountInfo} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
