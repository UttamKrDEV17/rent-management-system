import React, { useState } from "react";
import { LockKeyhole, Mail, Warehouse } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LoginToggle from "../components/LoginToggle";
import { useLoginMutation } from "../api/authApi";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await login(formData).unwrap();
      navigate("/owner")
    }catch(err){
      console.log("Login failed:",err)
    }
  };

  return (
    <section className="bg-background text-text font-primary min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-8">
          {/*Header*/}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Warehouse className="text-primary text-4xl" />
            </div>
            <h2 className="text-navy text-3xl font-bold tracking-tight">
              Sangrah
            </h2>
            <p className="text-slate-500 mt-2 text-center">
              Manage your property with confidence
            </p>
          </div>
          {/*Login Toggle*/}
          <LoginToggle />

          {/*Form*/}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium text-navy mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-slate-400 text-xl" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white text-navy sm:text-sm placeholder:text-slate-400"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  className="block text-sm font-medium text-navy"
                  htmlFor="password"
                >
                  Password
                </label>
                <Link
                  className="text-sm font-medium text-primary hover:text-primary/80"
                  to="/forgotPassword"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockKeyhole className="text-slate-400 text-xl" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white text-navy sm:text-sm placeholder:text-slate-400"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label className="ml-2 block text-sm text-slate-600">
                Remember me
              </label>
            </div>
            <button
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 14.627 0 12 8h4z"
                    />
                  </svg>
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-600">
              Don't have an account?{" "}
              <Link
                className="font-semibold text-primary hover:underline underline-offset-4"
                to="/signup/owner"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="h-1.5 w-full bg-primary"></div>
      </div>
    </section>
  );
};

export default Login;
