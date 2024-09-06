import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Cookie from 'js-cookie';
import WelcomePageImage from '../assets/Frame 14.png';
import styles from '../style/WelcomePage.module.css';
import buttons from '../style/Button.module.css';

function WelcomePage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    income: Yup.number().required('Income is required').positive('Income must be positive'),
    name: Yup.string().required('Name is required'),
    goals: Yup.string().required('Goals are required')
  });

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={WelcomePageImage} alt="Welcome" />
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Money <span>Budget</span></h1>
        <Formik
          initialValues={{ income: '', name: '', goals: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            Cookie.set('userDetails', JSON.stringify(values), { expires: 7 });
            navigate('/dashboard');
            actions.setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form id="login-form">
              <Field className={styles.input} name="income" type="text" placeholder="Insert Your Income" />
              {errors.income && touched.income && <div className={styles.error}>{errors.income}</div>}
              <Field className={styles.input} name="name" type="text" placeholder="Insert Your Name" />
              {errors.name && touched.name && <div className={styles.error}>{errors.name}</div>}
              <Field className={styles.input} name="goals" type="text" placeholder="Insert Your Goals" />
              {errors.goals && touched.goals && <div className={styles.error}>{errors.goals}</div>}
              <div className={buttons.wrapper}>
                <div className={buttons.linkWrapper}>
                  <button className={buttons.button} type="submit">
                    Start Your Calculation
                    <div className={buttons.icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default WelcomePage;
