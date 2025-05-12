import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {
  className?: string;
}

const Signup: React.FC<IProps> = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const history = useHistory();
  const handleLoginClick = () => {
    history.push('/login');
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    history.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Logo */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img className="h-10 w-10" src={'/assets/alternate_logo.png'} alt="SignPal Logo" />
            <h1 className="ml-3 text-2xl font-bold">
              <span className="text-[#535BCD]">Sign</span>
              <span className="text-[#A09612]">Pal</span>
            </h1>
          </div>
          <button
            onClick={handleLoginClick}
            className="px-4 py-2 text-sm font-medium text-[#535BCD] hover:text-[#424aa3] transition-colors"
          >
            Already have an account? Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row gap-8 items-center">
          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Create your account</h2>
              <p className="text-gray-600 mb-8">Let's get you all set up so you can access your personal account.</p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="relative">
                    <label htmlFor="firstName" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <label htmlFor="lastName" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative sm:col-span-2">
                    <label htmlFor="email" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative sm:col-span-2">
                    <label htmlFor="phoneNumber" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600">
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <label htmlFor="password" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-3"
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Confirm Password */}
                  <div className="relative">
                    <label htmlFor="confirmPassword" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-3 top-3"
                    >
                      {showConfirmPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Password complexity indicator - optional enhancement */}
                {formData.password && (
                  <div className="mt-1">
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${formData.password.length > 8 ? 'bg-green-500' : 'bg-yellow-500'}`}
                          style={{ width: `${Math.min(100, formData.password.length * 10)}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-xs text-gray-500">
                        {formData.password.length < 6 ? 'Weak' : formData.password.length < 10 ? 'Medium' : 'Strong'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Terms and Privacy Policy */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-600">
                      I agree to all the{' '}
                      <a href="#" className="text-[#FF8682] hover:underline">Terms</a>
                      {' '}and{' '}
                      <a href="#" className="text-[#FF8682] hover:underline">Privacy Policies</a>
                    </label>
                  </div>
                </div>

                {/* Sign Up Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1E1E2F] hover:bg-[#2a2a42] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#535BCD] transition-colors"
                  >
                    Create account
                  </button>
                </div>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500">Or sign up with</span>
                  </div>
                </div>

                {/* Social Sign Up */}
                <div className="grid grid-cols-3 gap-3">
                  <button type="button" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.525V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                      <path d="M12 23C14.97 23 17.46 22.015 19.28 20.335L15.725 17.525C14.74 18.18 13.48 18.555 12 18.555C9.13504 18.555 6.70504 16.615 5.84604 13.98H2.17004V16.88C3.98004 20.425 7.70004 23 12 23Z" fill="#34A853" />
                      <path d="M5.846 13.98C5.625 13.33 5.5 12.635 5.5 11.92C5.5 11.205 5.625 10.51 5.846 9.86V6.96H2.17C1.4 8.49 1 10.16 1 11.92C1 13.68 1.4 15.35 2.17 16.88L5.846 13.98Z" fill="#FBBC05" />
                      <path d="M12 5.285C13.525 5.285 14.885 5.825 15.93 6.815L19.07 3.675C17.455 2.17 14.965 1.25 12 1.25C7.70004 1.25 3.98004 3.825 2.17004 7.37L5.84604 10.27C6.70504 7.635 9.13504 5.695 12 5.695V5.285Z" fill="#EA4335" />
                    </svg>
                  </button>
                  <button type="button" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                    <svg className="h-5 w-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073C24 5.404 18.629 0 12 0C5.371 0 0 5.404 0 12.073C0 18.063 4.388 23.027 10.125 23.924V15.496H7.078V12.073H10.125V9.413C10.125 6.396 11.917 4.737 14.658 4.737C15.97 4.737 17.344 4.975 17.344 4.975V7.957H15.83C14.339 7.957 13.874 8.892 13.874 9.851V12.073H17.202L16.67 15.496H13.874V23.924C19.612 23.027 24 18.063 24 12.073Z" />
                    </svg>
                  </button>
                  <button type="button" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                    <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-128.png" alt="Twitter" className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:block w-full md:w-1/2">
            <img src="https://cdn4.iconfinder.com/data/icons/hand-drawn-business-ui-pack/65/Sign_Up-128.png" alt="Sign Up" className="w-full h-auto" />
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">© 2025 SignPal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
export default Signup;