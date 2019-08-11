import React from "react";
import {
	Formik,
	FormikActions,
	FormikProps,
	Form as FormikForm,
	Field
} from "formik";
import { Form, Button, Alert } from "react-bootstrap";
import { string, object } from "yup";
import { connect, useSelector } from "react-redux";
import { updatePost, UpdatePostType, Post } from "../../../../actions";
import { AppState } from "../../../../reducers";
import FormField from "../../../../components/FormField";

interface EditFormValues {
	title: string;
	content: string;
}

type EditFormProps = {
	id: string;
	post?: Post;
	updatePost: UpdatePostType;
};

const EditForm: React.FC<EditFormProps> = ({ id, post, updatePost }) => {
	const successMsg = useSelector((state: AppState) => state.msg.success);

	return (
		<>
			{successMsg && <Alert variant="success">{successMsg}</Alert>}
			<Formik
				initialValues={{
					title: post ? post.title.rendered : "",
					content: post ? post.content.rendered : ""
				}}
				enableReinitialize={true}
				onSubmit={(
					values: EditFormValues,
					actions: FormikActions<EditFormValues>
				) => {
					updatePost(id, values, () => {
						actions.setSubmitting(false);
					});
				}}
				validationSchema={SignFormSchemaValidation}
				render={({ isSubmitting }: FormikProps<EditFormValues>) => (
					<FormikForm>
						<Field
							type="text"
							name="title"
							placeholder="..."
							component={FormField}
						/>
						<Field
							type="textarea"
							name="content"
							placeholder="..."
							component={FormField}
						/>
						<Form.Group>
							<Button variant="primary" type="submit" disabled={isSubmitting}>
								{isSubmitting ? (
									<>
										<span className="spinner-grow spinner-grow-sm" />
										Loading...
									</>
								) : (
									"Update"
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
	title: string().required("This field is required."),
	content: string().required("This field is required.")
});

export default connect(
	null,
	{ updatePost }
)(EditForm);
