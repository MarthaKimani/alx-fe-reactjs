import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// ✅ Validation schema (contains string().required)
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert('Form submitted successfully!');
      }}
    >
      <Form className="max-w-md mx-auto p-6 border rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">Contact Form</h2>

        <div className="mb-3">
          <label className="block font-medium mb-1">Name</label>
          <Field
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="mb-3">
          <label className="block font-medium mb-1">Email</label>
          <Field
            type="email"
            name="email"
            className="w-full border p-2 rounded"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;

