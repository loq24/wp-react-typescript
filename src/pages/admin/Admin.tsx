import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import SidebarNav from 'components/SidebarNav';
import { Route, useLocation } from 'react-router-dom';
import Introduction from './Introduction';
import Posts from './Posts/Posts';
import Edit from './Post/Edit/Edit';
import AddNew from './AddNew/AddNew';
import AccountInfo from './AccountInfo';
import { AppState } from 'reducers';
import { unAuthUser } from 'actions';

const Admin: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: AppState) => state.wp.currentUser);
  const { pathname } = useLocation();

  const unAuthUserCallback = React.useCallback(() => {
    dispatch(unAuthUser());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <Header currentUser={currentUser} unAuthUser={unAuthUserCallback} />
      <div className="admin-content">
        <SidebarNav basePath="/" pathName={pathname} />
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
