import React, { useState } from 'react';
import Navbar from './Navbar';
import * as Yup from 'yup';

const Signup = () => {
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

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
    }
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};


  const handleCityChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      city: value,
    });
  };





  const handleGenderChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      gender: value,
    });
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 absolute top-1 mr-1 left-1/2 -translate-x-1/2 translate-y-1/5 bg-gray-200 rounded p-6 max-w-[500px] w-full mt-6 mb-6'>
        <div className='flex flex-col justify-center items-center w-full'>
          <h3 className='mb-5 text-xl'>Sign Up</h3>
          <hr />
          <div className='mt-2'>
            <div className='mb-5 names flex flex-col items-center justify-center gap-3 w-full'>
              <input
                className='border-b-2 border-gray-500 p-2 w-full'
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName" />
              {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
              <input
                onChange={handleChange}
                name='lastName'
                className='border-b-2 border-gray-500 p-2 w-full'
                type="text"
                placeholder="Last Name"
                value={formData.lastName} />
              {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </div>
            <div className='email-&-password flex flex-col gap-3 w-full'>
              <input
                name='email'
                onChange={handleChange}
                className='bg-gray-200 border-b-2 border-gray-500 p-2 w-full'
                type="email"
                placeholder="Email"
                value={formData.email} />
              {errors.email && <p className="text-red-500 items-center">{errors.email}</p>}
              <div className='relative w-full'>
                <input
                  name='password'
                  onChange={handleChange}
                  value={formData.password}
                  className='w-full border-gray-500 p-2 pr-10 border-b-2 rounded focus:outline-none'
                  type={showPassword ? "text" : "password"}
                  placeholder="Password" />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
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
            className='border-b-2 border-gray-500 p-2 w-full'
            type="text"
            value={formData.nationalID}
            placeholder="Enter your ID"
          />
          {errors.nationalID && <p className="text-red-500">{errors.nationalID}</p>}
        </div>

        <div className='md:w-1/2 w-full'>
          <h3>City :</h3>
          <select
            id="city"
            name='city'
            value={formData.city}
            onChange={handleCityChange}
            className='w-full border-b-2'>
            <option value="">---Select---</option>
            <option value="Tehran">Tehran</option>
            <option value="Tabriz">Tabriz</option>
            <option value="Esfahan">Esfahan</option>
            <option value="Mashhad">Mashhad</option>
            <option value="Shiraz">Shiraz</option>
          </select>
          {errors.city && <p className="text-red-500">{errors.city}</p>}
        </div>

       <div className='w-full'>
        <h3>Gender :</h3>
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
        {errors.gender && <p className="text-red-500">{errors.gender}</p>}
      </div>


        <input
          className='cursor-pointer bg-blue-500 px-6 py-3 mt-4 rounded-3xl text-white w-full'
          type="submit"
          id='submit' />
      </form>
    </div>
  );
};

export default Signup;
