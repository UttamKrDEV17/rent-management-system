import React from "react";
import HouseImg from "../../../assets/signup/House.png";
import { LockKeyhole, Mail, Phone, User, Warehouse } from "lucide-react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const OwnerSignup = () => {
  return (
    <section className="bg-background font-primary text-slate-900 antialiased">
      <div className="flex min-h-screen">
        {/* LeftSide:Image&branding */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-navy">
          <div className="absolute inset-0 z-0">
            <div
              style={{ backgroundImage: `url(${HouseImg})` }}
              className="w-full h-full bg-cover bg-center opacity-70"
              data-alt="Modern luxury house with glass windows and garden"
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/40 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-between p-12 w-full">
            <div className="flex items-center gap-2 text-white">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                <Warehouse className="font-bold text-navy" />
              </div>
              <Link to="/" className="text-2xl font-bold tracking-tight">Sangrah</Link>
            </div>
            <div className="max-w-lg mb-12">
              <h1 className="text-white text-5xl font-extrabold leading-tight tracking-tight mb-6">
                Start managing your properties with HouseFlow.
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed">
                Automate rent increases and utility tracking in minutes. The
                modern platform for professional property managers.
              </p>
              <div className="mt-10 flex gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">15k+</span>
                  <span className="text-slate-400 text-sm">Active Units</span>
                </div>
                <div className="border-l border-slate-700 h-10 my-auto"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">99.9%</span>
                  <span className="text-slate-400 text-sm">Uptime</span>
                </div>
              </div>
            </div>
            <div className="text-slate-400 text-sm">
              © 2026 Sangrah Technologies Inc. All rights reserved.
            </div>
          </div>
        </div>
        {/* RightSide */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-20 bg-white dark:bg-background-dark">
          <div className="w-full max-w-md space-y-8">
            <div className="lg:hidden flex items-center gap-2 mb-8">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                <Warehouse className="font-bold text-navy" />
              </div>
              <Link to="/" className="text-2xl font-bold tracking-tight text-navy">
                HouseFlow
              </Link>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight">
                Create your account
              </h2>
              <p className="mt-2 text-slate-500 ">
                Join thousands of property managers today.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {/* fullname */}
                <Input
                  id="full-name"
                  label="Full Name"
                  icon={User}
                  placeholder="John Doe"
                  required
                />
                {/* Email */}
                <Input
                  id="email"
                  label="Email"
                  icon={Mail}
                  type="email"
                  placeholder="john@email.com"
                  required
                />
                {/* Phone */}
                <Input
                  id="phone"
                  label="Phone"
                  icon={Phone}
                  type="number"
                  placeholder="+91 111 222 3333"
                  required
                />
                {/* Password */}
                <Input
                  id="password"
                  label="Password"
                  icon={LockKeyhole}
                  type="password"
                  placeholder="••••••••"
                  required
                />
                {/* strength Meter */}

                <div className="flex items-center">
                  <input
                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                    id="terms"
                    name="terms"
                    required=""
                    type="checkbox"
                  />
                  <label
                    className="ml-2 block text-sm text-slate-600 dark:text-slate-400"
                    htmlFor="terms"
                  >
                    I agree to the{" "}
                    <Link
                      className="text-primary font-semibold hover:underline"
                      to="/termsofservice"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-primary font-semibold hover:underline"
                      to="/privacypolicy"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
                <button
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-slate-50 bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                  type="submit"
                >
                  Create Account
                </button>
              </div>
            </form>
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-background-dark text-slate-500 uppercase tracking-wider font-medium">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200  rounded-lg bg-white  text-sm font-semibold text-navy  hover:bg-slate-50  transition-all">
                <img
                  alt="Google"
                  className="w-5 h-5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrlyp2rhDaLlQiakC9NW6jz0wjBQfHuALaoShchhSwPUCbaG961Uq40rGEW2BSkmbihy21-x4aM0K_lbK9ro17MxzaX2fuMou-xYwqzPWMJH66aQRwLEhnXzU_Mflnu5O8cWeVOct4BmyEM4AppqUmMd_VQB0ohTbyWHJpH5ty-N_nbzqb4CApko1zBVY9o7_wZ4VHIDHMKgdO1W_PaEya7lRWy60SzH7FZHyuSzoiBLOXKtFojSkq7sg0rFK_YQpglFpmqFAXTts"
                />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200  rounded-lg bg-white  text-sm font-semibold text-navy  hover:bg-slate-50  transition-all">
                <img
                  alt="LinkedIn"
                  className="w-5 h-5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTMlC_yYSYxe5PLNWAlv1n9anhq1BdBj24Vv5sQ6VyXIt3qF4PGrQ6PiEj3Idn6cJGqHS3V3yGztLcY7XI62YMX8WRqHB4ojXAQGc76pmty3BrOs6Ut41RtwlTPlXLcc7-9cGpAh9Sm6YJoyC07gIgBOsqOLXzWp0Gu7BAQ_AQbeIQwfJ1u-gag4vT1tgRyQHI4nQdUJsMBBxKsixznUgB_AZceSITueFp-W4LbdFe8TuSOB0bSjOGilMjgLeSIp3Yl9T07OOkFbs"
                />
                LinkedIn
              </button>
            </div>
            <p className="text-center text-sm text-slate-600 mt-8">
              Already have an account?
              <Link
                className="font-bold text-primary hover:underline"
                to="/login"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSignup;
