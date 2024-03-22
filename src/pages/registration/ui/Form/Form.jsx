'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../../../shared/input/ui/ui';
import Button from '../../../../shared/button/ui/ui';
import Image from 'next/image';
import { usePostRegisterMutation } from '../../api/api';
import { useSelector } from 'react-redux';
import logo from '../../../../../public/assets/givemeBlack.svg';
import Link from 'next/link';

const Form = () => {
  const data = useSelector((state) => state.auth);
  const [postRegister, { isLoading, isError }] = usePostRegisterMutation();

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    Name: Yup.string().required('Name is required'),
    Surname: Yup.string().required('Surname is required'),
    Email: Yup.string().email('Invalid email').required('Email is required'),
    Password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: validationSchema, // Pass the validation schema to useFormik hook
    onSubmit: async (values) => {
      try {
        const response = await postRegister(values);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white w-[400px] h-[626.67px] " onSubmit={formik.handleSubmit}>
        <div className="flex justify-center items-center gap-7 flex-col">
          <div className="mt-4">
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex gap-3 justify-center">
            <Link href="/register">Войти</Link>
            <Link href="/register">Зарегистрироваться</Link>
          </div>
        </div>
        <div className="ml-5 flex flex-col gap-6 mt-5">
          <div>
            <Input
              placeholder="Name"
              text="Your name"
              name="Name"
              value={formik.values.Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Name && formik.errors.Name ? (
              <div className="text-red-500">{formik.errors.Name}</div>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="Surname"
              text="Your Surname"
              name="Surname"
              value={formik.values.Surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Surname && formik.errors.Surname ? (
              <div className="text-red-500">{formik.errors.Surname}</div>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="Email"
              text="Email"
              name="Email"
              type="email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Email && formik.errors.Email ? (
              <div className="text-red-500">{formik.errors.Email}</div>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="Password"
              text="Password"
              name="Password"
              type="password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Password && formik.errors.Password ? (
              <div className="text-red-500">{formik.errors.Password}</div>
            ) : null}
          </div>
          <div>
            <Button text="Зарегистрироваться" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;