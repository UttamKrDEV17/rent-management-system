import React from "react";
import { House, User, CircleCheck } from "lucide-react";
import Owner from "../../../assets/Owner.svg?react";
import Tenants from "../../../assets/tenants.svg?react";
import { Link } from "react-router-dom";

const DualValue = () => {
  return (
    <div className="mt-16">
        <div className="mb-12 text-center">
            <h1 className="flex justify-center font-bold text-2xl sm:text-3xl text-text">
        Dual Value for Everyone
      </h1>
      <p className="text-gray-700 flex justify-center m-auto max-w-xs sm:max-w-2xl text-center my-4">
        We've built to dedicated experiences for both sides of the rental
        equation, ensuring seamless communication and transparency.
      </p>
        </div>
      

      <div className="grid md:grid-cols-2 gap-8">
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-primary/10 transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Owner className="text-8xl" />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-text/5 rounded-xl flex items-center justify-center text-navy mb-6">
              <House />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">
              For Property Owners
            </h3>
            <p className="text-slate mb-6">
              Automate your entire workflow. From rent collection to maintenance
              tracking, manage your portfolio from anywhere.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm font-medium text-slate">
                <CircleCheck className="text-primary"/> Automated Rent Collection
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate">
                <CircleCheck className="text-primary" /> Expense Tracking &amp; Reports
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate">
                <CircleCheck className="text-primary" /> Vendor Management
              </li>
            </ul>
            <Link className="flex items-center justify-center w-full py-3 rounded-lg border border-navy/20 font-bold text-navy hover:bg-navy hover:text-white transition-colors" to="login?type=owner">
              Owner Login
            </Link>
          </div>
        </div>

        <div className="group relative bg-navy p-8 rounded-2xl border border-navy shadow-xl shadow-gray-800/40 hover:shadow-2xl  transition-all">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Tenants className="text-8xl text-primary" />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-text/5 rounded-xl flex items-center justify-center text-primary mb-6">
              <User />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              For Tenants
            </h3>
            <p className="text-slate-300 mb-6">
              A simple portal to pay rent, view lease details, and report issues instantly directly from your phone.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-200">
                <CircleCheck className="text-primary" />  One-tap Mobile Payments
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-200">
                <CircleCheck className="text-primary" />  Maintenance Request History
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-200">
                <CircleCheck className="text-primary" />  Digital Lease Access
              </li>
            </ul>
            <Link to="/login?type=tenant" className="flex items-center justify-center w-full py-3 rounded-lg border border-white/20 font-bold text-white hover:bg-white hover:text-navy transition-colors">
                Tenant Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualValue;
