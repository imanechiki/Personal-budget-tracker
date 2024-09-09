import React from 'react';
import * as Yup from 'yup';
import FormikForm from '../../../components/Form/FormikForm';
import StartButton from '../../../components/Buttons/StartButton/StartButton.jsx'; 
import '../../../style/Expense-module.css';  

const ExpenseModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  const initialValues = { name: '', amount: '' };
  const validationSchema = Yup.object({
    name: Yup.string().required('Expense name is required'),
    amount: Yup.number().positive('Amount must be positive').required('Amount is required'),
  });

  const fields = [
    { name: 'name', type: 'text', placeholder: 'Enter expense name' },
    { name: 'amount', type: 'number', placeholder: 'Enter amount' },
  ];

  const onSubmit = (values) => {
    onSave(values);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={onClose}>&times;</span>
        <FormikForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          fields={fields}
          ButtonComponent={StartButton} 
        />
      </div>
    </div>
  );
};

export default ExpenseModal;
