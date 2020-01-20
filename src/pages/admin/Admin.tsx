import React from 'react';
import AdminHeader from '../../components/AdminHeader';
import SidebarNav from 'components/SidebarNav/SidebarNav';
import { Route, useLocation } from 'react-router-dom';
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
      <AdminHeader />
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
