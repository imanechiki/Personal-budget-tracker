import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../style/Expence-module.css';  // Correct path for your CSS module

const ExpenseValidationSchema = Yup.object().shape({
  name: Yup.string().required('Expense name is required'),
  amount: Yup.number().positive('Amount must be positive').required('Amount is required')
});

const ExpenseModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
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
                {errors.name && touched.name && <div className={styles.error}>{errors.name}</div>}
              </label>
              <label>
                Amount:
                <Field type="number" name="amount" />
                {errors.amount && touched.amount && <div className={styles.error}>{errors.amount}</div>}
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
