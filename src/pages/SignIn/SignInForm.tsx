import React from 'react';
import {
	Formik,
	FormikActions,
	FormikProps,
	Form as FormikForm,
	Field
} from 'formik';
import { Form, Button, Alert } from 'react-bootstrap';
import { string, object } from 'yup';
import { connect, useSelector } from 'react-redux';
import { authUser, fetchCurrentUser, FormValues, AuthUserType } from 'actions';
import { AppState } from 'reducers';
import FormField from 'components/FormField';

const initialValues: FormValues = {
	username: 'editoruser',
	password: 'editoruserpass'
};

type SignInFormProps = {
	authUser: AuthUserType;
	fetchCurrentUser: () => void;
};

const SignInForm = ({ authUser, fetchCurrentUser }: SignInFormProps) => {
	const warningMsg = useSelector((state: AppState) => state.msg.warning);
	const successMsg = useSelector((state: AppState) => state.msg.success);

	return (
		<>
			{warningMsg && <Alert variant='warning'>{warningMsg}</Alert>}
			{successMsg && <Alert variant='success'>{successMsg}</Alert>}
			<Formik
				initialValues={initialValues}
				onSubmit={(values: FormValues, actions: FormikActions<FormValues>) => {
					authUser(values, () => {
						actions.setSubmitting(false);
						fetchCurrentUser();
					});
				}}
				validationSchema={SignFormSchemaValidation}
				render={({ isSubmitting }: FormikProps<FormValues>) => (
					<FormikForm>
						<Field
							type='text'
							name='username'
							placeholder='Username'
							component={FormField}
						/>
						<Field
							type='password'
							name='password'
							placeholder='Password'
							component={FormField}
						/>
						<Form.Group className='text-center'>
							<Button variant='primary' type='submit' disabled={isSubmitting}>
								{isSubmitting ? (
									<>
										<span className='spinner-grow spinner-grow-sm' />
										Loading...
									</>
								) : (
									'Sign In'
								)}
							</Button>
						</Form.Group>
					</FormikForm>
				)}
			/>
		</>
	);
};

const SignFormSchemaValidation = object().shape({
	username: string().required('This field is required.'),
	password: string().required('This field is required.')
});

export default connect(
	null,
	{ authUser, fetchCurrentUser }
)(SignInForm);
