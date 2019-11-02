import React, { useEffect } from 'react';
import { match } from 'react-router-dom';
import EditForm from './EditForm';
import { connect, useSelector } from 'react-redux';
import { fetchPost, FetchPostType } from 'actions';
import { AppState } from 'reducers';

type Param = {
	id: string;
};

type EditProps = {
	match: match<Param>;
	fetchPost: FetchPostType;
};

const Edit: React.FC<EditProps> = ({ match, fetchPost }) => {
	const { params } = match;
	const post = useSelector((state: AppState) => state.wp.post);

	useEffect(() => {
		fetchPost(params.id);
	}, [fetchPost, params.id]);

	return (
		<div>
			<h1>Update Post</h1>
			<EditForm id={params.id} post={post} />
		</div>
	);
};

export default connect(
	null,
	{ fetchPost }
)(Edit);
