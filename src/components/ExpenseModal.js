import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../style/Expense-module.css';  

const ExpenseValidationSchema = Yup.object().shape({
  name: Yup.string().required('Expense name is required'),
  amount: Yup.number().positive('Amount must be positive').required('Amount is required')
});

const ExpenseModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className={"modal"} id="model">
      <div className={"modalContent"}>
        <span className={"close"} onClick={onClose}>&times;</span>
        <Formik
          initialValues={{ name: '', amount: '' }}
          validationSchema={ExpenseValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            onSave(values);
            setSubmitting(false);
            onClose();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label>
                Expense Name:
                <Field type="text" name="name" />
                {errors.name && touched.name && <div className={"error"}>{errors.name}</div>}
              </label>
              <label>
                Amount:
                <Field type="number" name="amount" />
                {errors.amount && touched.amount && <div className={"error"}>{errors.amount}</div>}
              </label>
              <button type="submit">Add Expense</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ExpenseModal;
