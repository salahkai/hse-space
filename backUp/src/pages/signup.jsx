import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { API } from '../constant';
import { setToken } from '../helpers';
import { ArrowClockwise } from '@phosphor-icons/react';

export default function SignUp() {
  const navigate = useNavigate();
  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        setToken(data.jwt);
        setUser(data.user);

        navigate('/profile', { replace: true });
      }
    } catch (err) {
      setError(err?.message ?? 'Something went wrong!');
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center relative">
      <div className="mx-auto max-w-lg px-6 lg:px-8  py-20">
        <img
          src="https://img.logoipsum.com/311.svg"
          alt=" logo"
          className="mx-auto lg:mb-11 mb-8"
        />
        <div className="rounded-2xl bg-white shadow-xl">
          <form
            onSubmit={handleSubmit}
            className="lg:p-11 p-7 mx-auto"
          >
            <div className="mb-11">
              <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
                Sign up
              </h1>
              <p className="text-gray-500 text-center text-base font-medium leading-6">
                Start your journey now!
              </p>
            </div>
            <input
              onChange={handleChange}
              type="text"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-xl border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Username"
              name="username"
              value={formData.username}
              required
            />
            <input
              onChange={handleChange}
              type="text"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-xl border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Email"
              name="email"
              value={formData.email}
              required
            />
            <input
              onChange={handleChange}
              type="password"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-xl border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Password"
              name="password"
              value={formData.password}
              pattern=".{8,}"
              title="Must contain least 8 or more characters"
              required
            />

            <button
              className={`w-full h-12 text-white text-base font-semibold leading-6 rounded-xl hover:bg-primary-800 transition-all duration-700 ${
                isLoading ? 'bg-primary-400' : 'bg-primary-600'
              } shadow-sm mb-11 flex items-center justify-center`}
            >
              Sign up
              {isLoading && (
                <span className="ml-1 animate-spin">
                  <ArrowClockwise size={24} />
                </span>
              )}
            </button>
            <a className="flex justify-center text-gray-900 text-base font-medium leading-6">
              Have an account?
              <span className="text-primary-600 font-semibold pl-3">
                Sign In
              </span>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
