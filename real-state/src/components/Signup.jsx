import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    nationalID: false,
    city: false,
    gender: false,
  });

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[!@#$%^&*(),.>":{}|<>]/, "Password must contain at least one symbol")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    nationalID: Yup.string()
      .matches(/^\d{10}$/, "National ID must be exactly 10 digits")
      .required("National ID is required"),
    city: Yup.string().required("City is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    nationalID: "",
    city: "",
    gender: "",
  });

 const handleSubmit = async (e) => {
  e.preventDefault();
  setTouched({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    nationalID: true,
    city: true,
    gender: true,
  });

  try {
    await validationSchema.validate(formData, { abortEarly: false });
    console.log("Form submitted", formData);
    console.log("Gender selected:", formData.gender);
  } catch (error) {
    const newErrors = {};
    error.inner.forEach((err) => {
      newErrors[err.path] = err.message;
    });
    setErrors(newErrors);

    if (newErrors.firstName) {
      toast.error(newErrors.firstName);
    }
    if (newErrors.lastName) {
      toast.error(newErrors.lastName);
    }
    if (newErrors.email) {
      toast.error(newErrors.email);
    }
    if (newErrors.password) {
      toast.error(newErrors.password);
    }
    if (newErrors.nationalID) {
      toast.error(newErrors.nationalID);
    }
    if (newErrors.city) {
      toast.error(newErrors.city);
    }
    if (newErrors.gender) {
      toast.error(newErrors.gender);
    }
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;

     if (name === "nationalID") {
      if (/^\d*$/.test(value)) {
       setFormData({
      ...formData,
      [name]: value,
      });

        setTouched({
          ...touched,
          [name]: true,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      setTouched({
        ...touched,
        [name]: true,
      });
    }

    
  };

  const handleCityChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      city: value,
    });
    setTouched({
      ...touched,
      city: true,
    });
  };

  const handleGenderChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      gender: value,
    });
    setTouched({
      ...touched,
      gender: true,
    });
  };

  return (
    <>
    <Navbar />
    <ToastContainer/>
    <div className='mb-5 bg-gray-200'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 absolute top-1 left-1/2 -translate-x-1/2 translate-y-1/5 bg-gray-200 rounded p-6 max-w-[500px] w-full mb-5'>
        <div className='flex flex-col justify-center items-center w-full'>
          <h3 className='mb-5 text-xl'>Sign Up</h3>
          <hr />
          <div className='mt-2 w-full'>
            <div className='mb-5 names flex flex-col items-center justify-center gap-3 w-full'>
              <input
                className='border-b-2 border-gray-500 p-2 w-full rounded'
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName" />
              <input
                onChange={handleChange}
                name='lastName'
                className='border-b-2 border-gray-500 p-2 w-full rounded'
                type="text"
                placeholder="Last Name"
                value={formData.lastName} />
            </div>
            <div className='email-&-password flex flex-col gap-3 w-full'>
              <input
                name='email'
                onChange={handleChange}
                className='bg-gray-200 border-b-2 border-gray-500 p-2 w-full rounded'
                type="email"
                placeholder="Email"
                value={formData.email} />
              <div className='relative w-full'>
                <input
                  name='password'
                  onChange={handleChange}
                  value={formData.password}
                  className='w-full border-gray-500 p-2 pr-10 border-b-2 rounded focus:outline-none'
                  type={showPassword ? "text" : "password"}
                  placeholder="Password" />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <h3>National ID :</h3>
          <input
            onChange={handleChange}
            name='nationalID'
            className='border-b-2 border-gray-500 p-2 w-full rounded'
            type="text"
            value={formData.nationalID}
            placeholder="Enter your ID"
          />
        </div>

        <div className=' w-full mt-4'>
          <h3>City :</h3>
          <select
            id="city"
            name='city'
            value={formData.city}
            onChange={handleCityChange}
            className='w-full border-b-2 p-2 rounded'>
            <option value="">---Select---</option>
            <option value="Tehran">Tehran</option>
            <option value="Tabriz">Tabriz</option>
            <option value="Esfahan">Esfahan</option>
            <option value="Mashhad">Mashhad</option>
            <option value="Shiraz">Shiraz</option>
          </select>
        </div>

        <div className='w-full'>
          <h3>Gender :</h3>
          <div className='ml-5 mt-2'>
            <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
          </div>
        </div>

        <input
          className='cursor-pointer bg-blue-500 px-6 py-3 mt-4 rounded-3xl text-white w-full'
          type="submit"
          id='submit' />
      </form>
    </div>
    </>
  );
};

export default Signup;
