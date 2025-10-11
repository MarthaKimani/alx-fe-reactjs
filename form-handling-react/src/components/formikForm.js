import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // ✅ Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  // ✅ Initial values
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // ✅ Submit handler
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form data:', values);
    alert('Form submitted successfully!');
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Register Form
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          {/* Username */}
          <div>
            <label className="block font-semibold mb-1">Username</label>
            <Field
              type="text"
              name="username"
              clas
