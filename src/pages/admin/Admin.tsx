import React from 'react';
import { useSelector, connect } from 'react-redux';
import Header from '../../components/Header';
import SidebarNav from 'components/SidebarNav';
import { match, Route } from 'react-router-dom';
import Introduction from './Introduction';
import Posts from './Posts/Posts';
import Edit from './Post/Edit/Edit';
import AddNew from './AddNew/AddNew';
import AccountInfo from './AccountInfo';
import { Location } from 'history';
import { AppState } from 'reducers';
import { unAuthUser } from 'actions';

type AdminProps = {
	match: match;
	location: Location;
	unAuthUser: () => void;
};

const Admin: React.FC<AdminProps> = ({ match, location, unAuthUser }) => {
	const currentUser = useSelector((state: AppState) => state.wp.currentUser);

	const { path: basePath } = match;
	const { pathname } = location;
	return (
		<div className='dashboard'>
			<Header currentUser={currentUser} unAuthUser={unAuthUser} />
			<div className='admin-content'>
				<SidebarNav basePath={basePath} pathName={pathname} />
				<div className='container-fluid'>
					<Route path={basePath} exact component={Introduction} />
					<Route path={`${basePath}posts`} component={Posts} />
					<Route path={`${basePath}post/edit/:id`} component={Edit} />
					<Route path={`${basePath}add-new`} component={AddNew} />
					<Route path={`${basePath}account`} component={AccountInfo} />
				</div>
			</div>
		</div>
	);
};

export default connect(
	null,
	{ unAuthUser }
)(Admin);
