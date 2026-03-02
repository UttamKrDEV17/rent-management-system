import { Mail, LockKeyhole, User, Warehouse, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="bg-background text-text font-primary">
      <div className="flex flex-col min-h-screen items-center justify-center p-4">
        {/*Header*/}
        <div className="w-full max-w-md bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="flex items-center bg-white p-6 pb-2 justify-between border-b border-slate-100">
            <div className="text-navy flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Warehouse className="text-primary" />
            </div>
            <h2 className="text-navy text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
              Sangrah
            </h2>
          </div>
          {/*Content Area*/}
          <div className="p-6 md:p-8">
            <h1 className="text-navy tracking-tight text-3xl font-bold leading-tight pb-2">
              Create your account
            </h1>
            <p className="text-slate-600 text-base font-normal leading-normal pb-8">
              Join{" "}
              <span className="font-semibold text-primary">
                500+ property managers
              </span>{" "}
              using Sangrah to simplify their operations.
            </p>
            {/*Form*/}
            <form className="space-y-5">
              {/*FullName*/}
              <div className="flex flex-col gap-2">
                <label className="text-navy text-sm font-semibold leading-normal">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                  <input
                    className="form-input flex w-full rounded-lg text-slate-900 border-slate-200 bg-white focus:outline-none focus:ring-2  focus:ring-primary/50 focus:border-primary h-12 pl-10 placeholder:text-slate-400 text-base font-normal"
                    placeholder="Name"
                    type="text"
                  />
                </div>
              </div>
              {/*Email Address*/}
              <div className="flex flex-col gap-2">
                <label className="text-navy text-sm font-semibold leading-normal">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                  <input
                    className="form-input flex w-full rounded-lg text-slate-900 border-slate-200 bg-white focus:outline-none focus:ring-2  focus:ring-primary/50 focus:border-primary h-12 pl-10 placeholder:text-slate-400 text-base font-normal"
                    placeholder="email@xyz.com"
                    type="email"
                  />
                </div>
              </div>
              {/*Phone*/}
              <div className="flex flex-col gap-2">
                <label className="text-navy text-sm font-semibold leading-normal">
                  Contact No.
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl flex items-center">
                    <Phone />
                    <p> +91-</p>
                  </span>

                  <input
                    className="form-input flex w-full rounded-lg text-slate-900 border-slate-200 bg-white focus:outline-none focus:ring-2  focus:ring-primary/50 focus:border-primary h-12 pl-20 placeholder:text-slate-400 text-base font-normal"
                    placeholder="1234567890"
                    type="number"
                  />
                </div>
              </div>

              {/*Password*/}
              <div className="flex flex-col gap-2">
                <label className="text-navy text-sm font-semibold leading-normal">
                  Password
                </label>
                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                  <input
                    className="form-input flex w-full rounded-lg text-slate-900 border-slate-200 bg-white focus:outline-none focus:ring-2  focus:ring-primary/50 focus:border-primary h-12 pl-10 placeholder:text-slate-400 text-base font-normal"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
              {/*Account Type Selection*/}
              <div className="flex flex-col gap-3 pt-2">
                <p className="text-navy text-sm font-semibold leading-normal">
                  I am registering as:
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <label className="relative flex items-center cursor-pointer group">
                    <input
                      defaultChecked
                      value="owner"
                      className="peer sr-only"
                      name="account_type"
                      type="radio"
                    />
                    <div className="w-full p-3 border border-slate-200 rounded-lg bg-white flex items-center gap-3 group-has-[input:checked]:border-primary group-has-[input:checked]:bg-primary/5 transition-all">
                      <div className="w-4 h-4 rounded-full border border-slate-300 group-has-[input:checked]:border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-has-[input:checked]:opacity-100"></div>
                      </div>
                      <span className="text-slate-700 text-sm font-medium">
                        I am a Property Owner
                      </span>
                    </div>
                  </label>
                  <label className="relative flex items-center cursor-pointer group">
                    <input
                      className="peer sr-only"
                      value="tenant"
                      name="account_type"
                      type="radio"
                    />
                    <div className="w-full p-3 border border-slate-200 rounded-lg bg-white flex items-center gap-3 group-has-[input:checked]:border-primary group-has-[input:checked]:bg-primary/5 transition-all">
                      <div className="w-4 h-4 rounded-full border border-slate-300 group-has-[input:checked]:border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-has-[input:checked]:opacity-100"></div>
                      </div>
                      <span className="text-slate-700 text-sm font-medium">
                        I am a Tenant
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              {/*Submit Button*/}
              <button
                className="w-full bg-primary hover:bg-primary text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mt-4"
                type="submit"
              >
                Create Account
              </button>
            </form>
            {/* Footer Link*/}
            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm">Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-semibold hover:underline underline-offset-4"
              >
                Log in
              </Link>
              </p>
            </div>
          </div>
          <div class="h-1.5 w-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
