import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import { Form, Button, Alert } from "react-bootstrap";
import { string, object } from "yup";
import { useDispatch } from "react-redux";
import { authUser, fetchCurrentUser, FormValues } from "actions";
import { useMsgSelector } from "selectors";
import FormField from "components/FormField";

type SignInFormProps = {
  accessValues: FormValues;
};

const SignInForm = ({ accessValues }: SignInFormProps) => {
  const dispatch = useDispatch();
  const { success, warning } = useMsgSelector();

  const handleSubmit = (values: FormValues): void => {
    dispatch(
      authUser(values, () => {
        dispatch(fetchCurrentUser());
      })
    );
  };

  return (
    <>
      {warning && (
        <Alert data-test="warning-msg" variant="warning">
          {warning}
        </Alert>
      )}
      {success && (
        <Alert variant="success" data-test="ty-msg">
          {success}
        </Alert>
      )}
      <Formik
        initialValues={accessValues}
        onSubmit={handleSubmit}
        validationSchema={SignFormSchemaValidation}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              component={FormField}
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              component={FormField}
            />
            <Form.Group className="text-center">
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
                  "Sign In"
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
  username: string().required("This field is required."),
  password: string().required("This field is required.")
});

export default SignInForm;
