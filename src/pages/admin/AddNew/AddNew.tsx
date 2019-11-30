import React from 'react';
import AddNewForm from './AddNewForm';

const AddNew = () => {
	return (
		<div>
			<h1 data-test='addnew-heading'>Publish new post</h1>
			<div className='mt-3'>
				<AddNewForm />
			</div>
		</div>
	);
};

export default AddNew;
