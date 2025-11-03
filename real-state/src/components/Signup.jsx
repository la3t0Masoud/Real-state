import React, { useState } from 'react'
import Navbar from './Navbar'

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
      <br /><br /><br /><br /><br /><br /><br /><br />

      <form className=' flex flex-col justify-center items-center gap-1.5 absolute top-0.5 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-200 rounded p-10'>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='mb-5'>Sign Up</h3>
            <hr />
            <div className='mt-2'>
                <div className='mb-5 names flex items-center justify-center gap-2'>
                    <input className='border-b-2 border-gray-500 border-t-0 border-l-0 border-r-0 rounded p-2 hover:border-gray-500' type="text" placeholder="name" />
                    <input className='border-b-2 border-gray-500 border-t-0 border-l-0 border-r-0 rounded p-2 active:border-gray-500' type="text" placeholder="last name" />
                </div>
                <div className='email-&-password flex gap-1.5'>
                    <input className='bg-gray-200 border-b-2 border-gray-500 border-t-0 border-l-0 border-r-0 rounded p-2 active:border-gray-500' type="email" placeholder="Email" />
                    <div className='relative w-full max-w-sm'>
                        <input className='w-full border-gray-500 p-2 pr-10 border-b-2 border-l-0 border-t-0 border-r-0 rounded focus:outline-none focus:ring-2' type={showPassword ? "text" : "password"} placeholder="password" />
                        <button
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none"
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            ><p className='hider cursor-pointer bg-gray-200 rounded-4xl' >
                                {showPassword ? "🙈" : "👁️"}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>

        <div>
            <h3 className='' >National ID :</h3>
            <br />
            <input
            className='border-b-2 border-gray-500 border-t-0 border-l-0 border-r-0 rounded p-2 hover:border-gray-500'
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter your Id"
            />
        </div>

        <div>
            <h3>City :</h3>
            <select id="sport" value={selected} onChange={handleChange}>
            <option value="">---Select---</option>
            <option value="Tehran">Tehran</option>
            <option value="Tabriz">Tabriz</option>
            <option value="Esfahan">Esfahan</option>
            <option value="Mashhad">Mashhad</option>
            <option value="Shiraz">Shiraz</option>
            </select>
        </div>

        <div className='items-center'>
            <h3 className='items-start'>Gender :</h3>
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
              <input className='cursor-pointer bg-blue-500 px-3 py-2 mt-2 rounded-3xl text-white' type="submit" id='submit' />

      </form>
    </div>
  );
};

export default Signup;
