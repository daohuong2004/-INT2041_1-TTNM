import { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {
  className?: string;
}

function Login(props: IProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignUpClick = () => {
    history.push('/signup');
  };

  const handleLoginClick = () => {
    history.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center mb-10">
            <img className="w-12 h-12" src={'/assets/alternate_logo.png'} alt="SignPal Logo" />
            <h1 className="ml-3 text-3xl font-bold">
              <span className="text-[#535BCD]">Sign</span>
              <span className="text-[#A09612]">Pal</span>
            </h1>
          </div>

          {/* Login Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="mt-2 text-gray-600">Login to access your account</p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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

            {/* Remember me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <button
                type="button"
                onClick={() => history.push('/forgot-password')}
                className="text-sm font-medium text-[#FF8682] hover:text-[#ff6c66] transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                onClick={handleLoginClick}
                className="w-full bg-[#1E1E2F] text-white py-3 rounded-md hover:bg-[#2a2a42] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-gray-700">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={handleSignUpClick}
                  className="font-medium text-[#FF8682] hover:text-[#ff6c66] transition-colors"
                >
                  Sign up
                </button>
              </p>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-50 px-4 text-sm text-gray-500">Or login with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-4">
              <button className="flex items-center justify-center py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <img
                  className="h-6"
                  src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-1024.png"
                  alt="Google"
                />
              </button>
              <button className="flex items-center justify-center py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <img
                  className="h-6"
                  src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-1024.png"
                  alt="Facebook"
                />
              </button>
              <button className="flex items-center justify-center py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <img
                  className="h-6"
                  src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/apple-1024.png"
                  alt="Apple"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="h-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <img
            src="/assets/fbbd5af3dcd1a864ccd3cfdf2a8a8082.png"
            alt="Login illustration"
            className="max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;