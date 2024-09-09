// src/components/FormikForm.jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import styles from '../../style/FormikForm.module.css'; // Assuming you have shared form styles


const FormikForm = ({ initialValues, validationSchema, onSubmit, fields, ButtonComponent }) => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {fields.map((field, index) => (
              <div key={index}>
                <label>
                  {field.label}
                  <Field
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className={styles.input}
                  />
                  {errors[field.name] && touched[field.name] && (
                    <div className={styles.error}>{errors[field.name]}</div>
                  )}
                </label>
              </div>
            ))}
            {/* Use the passed ButtonComponent if provided */}
            {ButtonComponent ? <ButtonComponent /> : <button type="submit">Submit</button>}
          </Form>
        )}
      </Formik>
    );
  };
  
  FormikForm.propTypes = {
    initialValues: PropTypes.object.isRequired,
    validationSchema: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
      })
    ).isRequired,
    ButtonComponent: PropTypes.elementType, // Optional custom button component
  };
  
  export default FormikForm;