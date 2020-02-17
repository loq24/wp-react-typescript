import React, { useEffect } from 'react';
import { match } from 'react-router-dom';
import EditForm from './EditForm';
import { useDispatch } from 'react-redux';
import { fetchPost } from 'actions';
import { useWpSelector } from 'selectors';

type Param = {
  id: string;
};

type EditProps = {
  match: match<Param>;
};

const Edit: React.FC<EditProps> = ({ match }) => {
  const { params } = match;
  const dispatch = useDispatch();
  const { post } = useWpSelector();

  useEffect(() => {
    dispatch(fetchPost(params.id));
  }, [params.id, dispatch]);

  return (
    <div>
      <h1>Update Post</h1>
      <EditForm id={params.id} post={post} />
    </div>
  );
};

export default Edit;
