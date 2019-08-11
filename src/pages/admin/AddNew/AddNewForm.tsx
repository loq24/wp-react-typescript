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
import { publishPost, NewPostData } from "../../../actions";
import { AppState } from "../../../reducers";
import FormField from "../../../components/FormField";

const initialValues: NewPostData = {
	title: "",
	content: "",
	status: "publish"
};

type AddNewProps = {
	publishPost: (newPostData: NewPostData, callback: () => void) => void;
};

const AddNewForm: React.FC<AddNewProps> = ({ publishPost }) => {
	const successMsg = useSelector((state: AppState) => state.msg.success);

	return (
		<>
			{successMsg && <Alert variant="success">{successMsg}</Alert>}
			<Formik
				initialValues={initialValues}
				enableReinitialize={true}
				onSubmit={(
					values: NewPostData,
					actions: FormikActions<NewPostData>
				) => {
					console.log(values);
					publishPost(values, () => {
						actions.setSubmitting(false);
					});
				}}
				validationSchema={SignFormSchemaValidation}
				render={({ isSubmitting }: FormikProps<NewPostData>) => (
					<FormikForm>
						<Field
							type="text"
							name="title"
							placeholder="Title..."
							component={FormField}
						/>
						<Field
							name="content"
							type="textarea"
							placeholder="Content..."
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
									"Publish"
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
	{ publishPost }
)(AddNewForm);
