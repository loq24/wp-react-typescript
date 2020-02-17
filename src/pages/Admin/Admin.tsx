import React from 'react';
import { useDispatch } from 'react-redux';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebarNav from 'components/AdminSidebarNav/AdminSidebarNav';
import { Route, useLocation } from 'react-router-dom';
import Introduction from './Introduction';
import Posts from './Posts/Posts';
import Edit from './Post/Edit/Edit';
import AddNew from './AddNew/AddNew';
import AccountInfo from './AccountInfo';
import { useWpSelector } from 'selectors';
import { unAuthUser } from 'actions';
import './Admin.css';

const Admin: React.FC = () => {
  const dispatch = useDispatch();
  const { currentUser } = useWpSelector();
  const { pathname } = useLocation();

  const unAuthUserCallback = React.useCallback(() => {
    dispatch(unAuthUser());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <AdminHeader currentUser={currentUser} unAuthUser={unAuthUserCallback} />
      <div className="admin-content">
        <AdminSidebarNav pathName={pathname} />
        <div className="container-fluid">
          <Route path="/" exact component={Introduction} />
          <Route path="/posts" component={Posts} />
          <Route path="/post/edit/:id" component={Edit} />
          <Route path="/add-new" component={AddNew} />
          <Route path="/account" component={AccountInfo} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
