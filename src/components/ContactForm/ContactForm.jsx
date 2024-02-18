import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useId } from 'react';
import c from './ContactForm.module.css';

const schema = yup.object().shape({
  name: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  number: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const ContactForm = ({ onAdd }) => {
  const elementId = useId();

  return (
    <div className={c.container}>
      <Formik
        initialValues={{ id: '', name: '', number: '' }}
        onSubmit={onAdd}
        validationSchema={schema}
      >
        <Form className={c.form}>
          <div className={c.field}>
            <label htmlFor={elementId + '-name'}>Name</label>
            <Field name="name" type="text" id={elementId + '-name'} placeholder="Name" />
            <ErrorMessage name="name" component="div" className={c.error} />
          </div>

          <div className={c.field}>
            <label htmlFor={elementId + '-number'}>Number</label>
            <Field name="number" type="tel" id={elementId + '-number'} placeholder="999-99-99" />
            <ErrorMessage name="number" component="div" className={c.error} />
          </div>

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
