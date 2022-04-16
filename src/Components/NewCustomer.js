import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as yup from "yup";
import Input from "../Common/Input";

const NewCustomer = () => {
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    city: "",
    terms: false,
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="new_Customer">
      <h1>
        Register <span>New Account</span>
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} label="Full Name" name="name" type="text" />
        <Input formik={formik} label="Email" name="email" type="email" />
        <div className="pass_box">
          <Input
            formik={formik}
            label="Password"
            name="password"
            type="password"
            inputRef={passwordInputRef}
          />
          <Input
            formik={formik}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            inputRef={confirmPasswordInputRef}
          />
        </div>
        <div className="formControl radio">
          <input
            onChange={formik.handleChange}
            value="male"
            type="radio"
            name="gender"
            id="male"
            checked={formik.values.gender == "male"}
          />
          <label htmlFor="male">Male</label>
          <input
            onChange={formik.handleChange}
            value="female"
            type="radio"
            name="gender"
            id="female"
            checked={formik.values.gender == "female"}
          />
          <label htmlFor="female">Female</label>
          {formik.errors.gender && formik.touched.gender && (
            <div className="error">{formik.errors.gender}</div>
          )}
        </div>
        <div className="formControl">
          <select name="city" onChange={formik.handleChange}>
            <option value="">Select Your City...</option>
            <option value="Tehran">Tehran</option>
            <option value="Esfahan">Esfahan</option>
            <option value="Shiraz">Shiraz</option>
            <option value="Sanandaj">Sanandaj</option>
          </select>
          {formik.errors.city && formik.touched.city && (
            <div className="error">{formik.errors.city}</div>
          )}
        </div>
        <div className="formControl check">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={true}
            onChange={formik.handleChange}
            checked={formik.values.terms}
          />
          <label htmlFor="terms">I accept terms and conditions</label>
          {formik.errors.terms && formik.touched.terms && (
            <div className="error">{formik.errors.terms}</div>
          )}
        </div>
        <button disabled={!formik.isValid} type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default NewCustomer;
