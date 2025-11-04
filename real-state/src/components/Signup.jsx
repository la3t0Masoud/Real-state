import React, { useState } from 'react';
import Navbar from './Navbar';

const Signup = () => {
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      setValue(val);
    }
    setSelected(val);
  };

  return (
    <div>
      <Navbar />

      <form className='flex flex-col justify-center items-center gap-3 absolute top-1 mr-1 left-1/2 -translate-x-1/2 translate-y-1/5 bg-gray-200 rounded p-6 max-w-[500px] w-full mt-6 mb-6'>
        <div className='flex flex-col justify-center items-center w-full'>
          <h3 className='mb-5 text-xl'>Sign Up</h3>
          <hr />
          <div className='mt-2'>
            <div className='mb-5 names flex flex-col items-center justify-center gap-3 w-full'>
              <input className='border-b-2 border-gray-500 p-2 w-full' type="text" placeholder="name" />
              <input className='border-b-2 border-gray-500 p-2 w-full' type="text" placeholder="last name" />
            </div>
            <div className='email-&-password flex flex-col gap-3 w-full'>
              <input className='bg-gray-200 border-b-2 border-gray-500 p-2 w-full' type="email" placeholder="Email" />
              <div className='relative w-full'>
                <input className='w-full border-gray-500 p-2 pr-10 border-b-2 rounded focus:outline-none' type={showPassword ? "text" : "password"} placeholder="password" />
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
            className='border-b-2 border-gray-500 p-2 w-full'
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter your Id"
          />
        </div>

        <div className='md:w-1/2 w-full'>
          <h3>City :</h3>
          <select id="sport" value={selected} onChange={handleChange} className='w-full border-b-2'>
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
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={selected === "male"}
              onChange={(e) => setSelected(e.target.value)}
            />
            male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={selected === "female"}
              onChange={(e) => setSelected(e.target.value)}
            />
            female
          </label>
        </div>

        <input className='cursor-pointer bg-blue-500 px-6 py-3 mt-4 rounded-3xl text-white w-full' type="submit" id='submit' />
      </form>
    </div>
  );
};

export default Signup;
