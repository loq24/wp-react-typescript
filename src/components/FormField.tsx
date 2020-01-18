import React from 'react';
import { FieldProps, FormikProps } from 'formik';
import { Form } from 'react-bootstrap';

interface FormFieldProps {
  type: string;
  className: string;
  placeholder: string;
}

const FormField: React.FC<FieldProps & FormFieldProps> = ({
  field,
  form,
  type,
  className,
  placeholder
}) => {
  switch (type) {
    case 'textarea':
      return (
        <Form.Group>
          <Form.Control
            as="textarea"
            size="lg"
            className={`contentarea ${className}`}
            {...field}
            placeholder={placeholder}
          />
          {renderError(form, field.name)}
        </Form.Group>
      );
    case 'password':
      return (
        <Form.Group>
          <Form.Control
            type="password"
            {...field}
            size="lg"
            placeholder={placeholder}
            className={className}
          />
          {renderError(form, field.name)}
        </Form.Group>
      );
    default:
      return (
        <Form.Group>
          <Form.Control
            type={type}
            {...field}
            size="lg"
            placeholder={placeholder}
            className={className}
          />
          {renderError(form, field.name)}
        </Form.Group>
      );
  }
};

const renderError = (form: FormikProps<any>, name: string) => {
  return (
    form.touched[name] &&
    form.errors[name] && (
      <span className="error-text" data-test={`error-text-${name}`}>
        {form.errors[name]}
      </span>
    )
  );
};

FormField.defaultProps = { className: '', placeholder: '' };

export default FormField;
