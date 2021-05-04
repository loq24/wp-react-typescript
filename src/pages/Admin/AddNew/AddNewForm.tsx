import React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form as FormikForm,
  Field
} from "formik";
import { Form, Button, Alert } from "react-bootstrap";
import { string, object } from "yup";
import { useDispatch } from "react-redux";
import { publishPost, NewPostData } from "actions";
import { useMsgSelector } from "selectors";
import FormField from "components/FormField";

const initialValues: NewPostData = {
  title: "",
  content: "",
  status: "publish"
};

const AddNewForm: React.FC = () => {
  const dispatch = useDispatch();
  const { success } = useMsgSelector();

  return (
    <>
      {success && (
        <Alert data-test="add-successful-msg" variant="success">
          {success}
        </Alert>
      )}
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(
          values: NewPostData,
          actions: FormikHelpers<NewPostData>
        ) => {
          dispatch(
            publishPost(values, () => {
              actions.setSubmitting(false);
            })
          );
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
                    <span
                      data-test="submitting"
                      className="spinner-grow spinner-grow-sm"
                    />
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

export default AddNewForm;
