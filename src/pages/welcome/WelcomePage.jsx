import React from 'react';
import * as Yup from 'yup';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import FormikForm from '../../components/Form/FormikForm';
import StartButton from '../../components/Buttons/StartButton/StartButton.jsx'; // Import the StartButton
import WelcomePageImage from '../../assets/Frame 14.png'; // Import your image
import styles from '../../style/WelcomePage.module.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const initialValues = { income: '', name: '', goals: '' };
  const validationSchema = Yup.object({
    income: Yup.number().required('Income is required').positive('Income must be positive'),
    name: Yup.string().required('Name is required'),
    goals: Yup.string().required('Goals are required'),
  });

  const onSubmit = (values) => {
    Cookie.set('userDetails', JSON.stringify(values), { expires: 7 });
    navigate('/dashboard');
  };

  const fields = [
    { name: 'income', type: 'text', placeholder: 'Insert Your Income' },
    { name: 'name', type: 'text', placeholder: 'Insert Your Name' },
    { name: 'goals', type: 'text', placeholder: 'Insert Your Goals' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={WelcomePageImage} alt="Welcome" />
      </div>
      <div className={styles.formContainer}>
      <h1 className={styles.title}>Money <span>Budget</span></h1>
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

export default WelcomePage;
