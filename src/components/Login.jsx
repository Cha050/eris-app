import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from '../assets/logo.png'; // Ensure the path to the logo is correct
import Launcher from "./Launcher";

export default function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Initially false since launcher is handled in App.js
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== "user@example.com") {
      setError("The email you entered is incorrect");
    } else if (password !== "p@ssword1234") {
      setError("The password you entered is incorrect");
    } else {
      setAuth(true);
      navigate("/home", { state: { message: "Successful" } });
    }
  };

  return (
    <>
      {loading ? (
        <Launcher setLoading={setLoading} />
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#e7e9ef]">
          <div className="mb-8">
            <img src={logo} alt="Barangay Logo" className="rounded-full w-32 h-32" />
          </div>
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <form onSubmit={handleSubmit}>
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
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-zinc-700 dark:text-zinc-300 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-zinc-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    placeholder="Password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-zinc-700 dark:text-zinc-300 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.46A9.974 9.974 0 0 1 12 4.5c3.05 0 5.8 1.37 7.66 3.54M9.56 6.94a5.998 5.998 0 0 1 4.88 0M19.92 15.54A9.974 9.974 0 0 1 12 19.5a9.974 9.974 0 0 1-7.66-3.54M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.46A9.974 9.974 0 0 1 12 4.5c3.05 0 5.8 1.37 7.66 3.54M9.56 6.94a5.998 5.998 0 0 1 4.88 0M19.92 15.54A9.974 9.974 0 0 1 12 19.5a9.974 9.974 0 0 1-7.66-3.54M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">Remember Me</span>
                </label>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="mb-4">
                <button
                  className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
              {error && (
                <div className="text-red-500 text-center mb-4">
                  {error}
                </div>
              )}
              <div className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-auto">
                Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-800">Create an account</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
