import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { API } from '../constant';
import { getToken } from '../helpers';

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();

      setUser(responseData);
      message.success('Data saved successfully!');
    } catch (error) {
      console.error(Error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen p-24">
      <div className="container mx-auto max-w-3xl mt-8">
        <h1 className="text-2xl font-bold text-gray-700 px-6 md:px-0">
          Account Settings
        </h1>

        <ul className="flex border-b border-gray-300 text-sm font-medium text-gray-600 mt-3 px-6 md:px-0">
          <li className="mr-8 text-gray-900 border-b-2 border-primary-600">
            <a href="#_" className="py-4 inline-block">
              Profile Info
            </a>
          </li>
          {/* <li className="mr-8 hover:text-gray-900">
            <a href="#_" className="py-4 inline-block">
              Security
            </a>
          </li>
  */}
        </ul>
        <form onSubmit={handleProfileUpdate}>
          <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
            <div className="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
              <h2 className="font-medium text-md text-gray-700 mb-4 tracking-wide">
                Profile Info
              </h2>
              <p className="text-xs text-gray-500">
                Update your basic profile information such as Email
                Address, Name, and Image.
              </p>
            </div>
            <div className="md:w-2/3 w-full">
              {/* <div className="py-6 px-16 ">
                <label
                  htmlFor="photo"
                  className="text-sm text-gray-600 w-full block"
                >
                  Photo
                </label>
                <div className="flex space-x-4 items-center">
                  <img
                    className="rounded-full w-20 h-20 border-4 mt-2 border-gray-200 "
                    id="photo"
                    src=""
                    alt="photo"
                  />
                  <div className="bg-gray-200 text-gray-500 text-xs  font-bold px-4 py-2 rounded-lg  hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer">
                    <input
                      type="file"
                      name="photo"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    Change Photo
                  </div>
                </div>
              </div> */}
              <hr className="border-gray-200" />
              <div className="py-6 px-16 flex flex-col space-y-4">
                <div>
                  <div className="flex space-x-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-sm text-gray-600"
                      >
                        First Name
                      </label>
                      <input
                        className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-primary-500"
                        type="text"
                        name="firstName"
                        value={user?.firstName ?? formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="text-sm text-gray-600"
                      >
                        Last Name
                      </label>
                      <input
                        className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-primary-500"
                        type="text"
                        name="lastName"
                        value={user?.lastName ?? formData.lastName}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone-number"
                    className="text-sm text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-primary-500"
                    type="number"
                    name="phone-number"
                    value={user?.phoneNumber ?? formData.phoneNumber}
                  />
                </div>
              </div>
              <hr className="border-gray-200" />
              <div className="py-6 px-16 flex flex-col space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-primary-500"
                    type="email"
                    name="email"
                    value={user?.email ?? formData.email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-primary-500"
                    type="password"
                    name="password"
                    defaultValue="********"
                    value={formData.password}
                  />
                </div>
              </div>

              <hr className="border-gray-200" />
            </div>
          </div>
          <div className="px-16 py-4 justify-around flex bg-gray-300  rounded-b-lg border-t border-gray-200">
            <p className="text-xs text-gray-500 tracking-tight mt-2">
              Click on Save to update your Profile Info
            </p>
            <input
              type="submit"
              className="bg-primary-500 text-white text-sm font-medium px-6 py-2 rounded float-right uppercase cursor-pointer"
              defaultValue="Save"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
