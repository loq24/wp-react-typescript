import React from "react";
import { Formik, FormikHelpers, Form as FormikForm, Field } from "formik";
import { Form, Button, Alert } from "react-bootstrap";
import { string, object } from "yup";
import { useDispatch } from "react-redux";
import { updatePost, Post } from "actions";
import { useMsgSelector } from "selectors";
import FormField from "components/FormField";

interface EditFormValues {
  title: string;
  content: string;
}

type EditFormProps = {
  id: string;
  post?: Post;
};

const EditForm: React.FC<EditFormProps> = ({ id, post }) => {
  const dispatch = useDispatch();
  const { success } = useMsgSelector();

  return (
    <>
      {success && (
        <Alert variant="success" data-test="edit-successful-msg">
          {success}
        </Alert>
      )}
      <Formik
        initialValues={{
          title: post ? post.title.rendered : "",
          content: post ? post.content.rendered : ""
        }}
        enableReinitialize={true}
        onSubmit={(
          values: EditFormValues,
          actions: FormikHelpers<EditFormValues>
        ) => {
          dispatch(
            updatePost(id, values, () => {
              actions.setSubmitting(false);
            })
          );
        }}
        validationSchema={SignFormSchemaValidation}
      >
        {({ isSubmitting }) => (
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
                    <span
                      data-test="submitting"
                      className="spinner-grow spinner-grow-sm"
                    />
                    Loading...
                  </>
                ) : (
                  "Update"
                )}
              </Button>
            </Form.Group>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

const SignFormSchemaValidation = object().shape({
  title: string().required("This field is required."),
  content: string().required("This field is required.")
});

export default EditForm;
