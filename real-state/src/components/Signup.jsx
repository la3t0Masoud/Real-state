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

      <form className=' flex flex-col justify-center items-center gap-1.5 absolute top-0.5 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-200 rounded  p-10'>
        <div>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="last name" />
            <input type="email" placeholder="Email" />
            <div className='flex'>
                <input type={showPassword ? "text" : "password"} placeholder="password" />
                <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    ><p className='hider' >
                        {showPassword ? "🙈" : "👁️"}
                    </p>
                </button>
            </div>
            
        </div>

        <div>
            <label>National ID :</label>
            <br />
            <input
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

        <div>
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

            <label style={{ marginLeft: "10px" }}>
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
              <input className='cursor-pointer' type="submit" id='submit' />

      </form>
    </div>
  );
};

export default Signup;
