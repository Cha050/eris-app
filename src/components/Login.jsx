import React from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  email !== "user@example.com"
      ? setError("The email you entered is incorrect")
      : password !== "password1234"
      ? setError("The password you entered is incorrect")
      : (setAuth(true),
        navigate("/dashboard", { state: { message: "Login Successful" } }));
};
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e7e9ef]">
      <div className="mb-8">
        {/* Your logo goes here */}
        <img
          src={logo}
          alt="Barangay Logo"
          className="rounded-full w-32 h-32"
        />
      </div>
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <form>
          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-zinc-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.94 6.94a1 1 0 011.32-.08l.1.08L10 11.59l5.64-4.73a1 1 0 011.32 1.5l-.1.08-6 5a1 1 0 01-1.32.08l-.1-.08-6-5a1 1 0 01-.08-1.32l.08-.1z" />
                </svg>
              </span>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-zinc-700 dark:text-zinc-300 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          {/* Password input field goes here */}
          <div className="mb-6">
            <label className="block text-zinc-700 dark:text-zinc-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 1110 0v2H8V7z" clipRule="evenodd" />
                </svg>
              </span>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-zinc-700 dark:text-zinc-300 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          {/* Remember Me checkbox and Forgot Password link go here */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Remember Me</span>
            </label>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
          {/* Login button goes here */}
          <div className="mb-4">
            <button
              className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
          {/* Create account link */}
          <div className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-auto">
            Dont have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-800">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
