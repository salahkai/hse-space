import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { API } from '../constant';
import { setToken } from '../helpers';
import { useState } from 'react';
import { ArrowClockwise } from '@phosphor-icons/react';
export default function Login() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const value = {
        identifier: formData.email,
        password: formData.password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
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
      console.error(err);
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
                Login
              </h1>
              <p className="text-gray-500 text-center text-base font-medium leading-6">
                Get started with you HSE world
              </p>
            </div>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-xl border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Email"
              value={formData.email}
              required
            />
            <input
              name="password"
              type="password"
              onChange={handleChange}
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-xl border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
              value={formData.password}
              placeholder="Password"
              pattern=".{8,}"
              title="Must contain least 8 or more characters"
              required
            />
            <a to="resetpassword" className="flex justify-end mb-6">
              <span className="text-primary-600 text-right text-base font-normal leading-6">
                Forgot Password?
              </span>
            </a>
            <button
              className={`w-full h-12 text-white text-base font-semibold leading-6 rounded-xl hover:bg-primary-800 transition-all duration-700 ${
                isLoading ? 'bg-primary-400' : 'bg-primary-600'
              } shadow-sm mb-11 flex items-center justify-center`}
            >
              Login
              {isLoading && (
                <span className="ml-1 animate-spin">
                  <ArrowClockwise size={24} />
                </span>
              )}
            </button>
            <Link
              to="/signup"
              className="flex justify-center text-gray-900 text-base font-medium leading-6"
            >
              Don’t have an account?
              <span className="text-primary-600 font-semibold pl-3">
                Sign Up
              </span>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
