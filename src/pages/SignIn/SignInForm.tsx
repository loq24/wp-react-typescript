import React from 'react';
import {
  Formik,
  FormikActions,
  FormikProps,
  Form as FormikForm,
  Field,
} from 'formik';
import { Form, Button, Alert } from 'react-bootstrap';
import { string, object } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, fetchCurrentUser, FormValues } from 'actions';
import { AppState } from 'reducers';
import FormField from 'components/FormField';

type SignInFormProps = {
  accessValues: FormValues;
};

const SignInForm = ({ accessValues }: SignInFormProps) => {
  const dispatch = useDispatch();
  const warningMsg = useSelector((state: AppState) => state.msg.warning);
  const successMsg = useSelector((state: AppState) => state.msg.success);

  const handleSubmit = (
    values: FormValues,
    actions: FormikActions<FormValues>
  ): void => {
    dispatch(
      authUser(values, () => {
        actions.setSubmitting(false);
        dispatch(fetchCurrentUser());
      })
    );
  };

  return (
    <>
      {warningMsg && (
        <Alert data-test="warning-msg" variant="warning">
          {warningMsg}
        </Alert>
      )}
      {successMsg && (
        <Alert variant="success" data-test="ty-msg">
          {successMsg}
        </Alert>
      )}
      <Formik
        initialValues={accessValues}
        onSubmit={handleSubmit}
        validationSchema={SignFormSchemaValidation}
        render={({ isSubmitting }: FormikProps<FormValues>) => (
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
  password: string().required('This field is required.'),
});

export default SignInForm;
