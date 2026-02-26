import React from "react";
import { Warehouse } from "lucide-react";

const HomeFooter = () => {
  return (
    <section className="w-full border-t border-gray-600 bg-navy text-white p-6">
      <div className="flex gap-4 items-center">
        <div className="bg-primary px-1 py-2 rounded-md inline">
          <Warehouse className="text-white" />
        </div>
        <h1 className="text-3xl font-extrabold">Sangrah</h1>
      </div>
      <p className="mt-4 text-md ">
        Making rental management seamless for everyone involved.
      </p>
      <div className="grid grid-cols-2 mt-6"> 
        <ul className="flex flex-col gap-2"> 
          <li className="text-md  font-bold">Product</li>
          <li className="text-sm font-light">Features</li>
          <li className="text-sm font-light">Pricing</li>
          <li className="text-sm font-light">Download App</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="text-md  font-bold">Company</li>
          <li className="text-sm font-light">About</li>
          <li className="text-sm font-light">Blog</li>
          <li className="text-sm font-light">Contact</li>
        </ul>
      </div>
    </section>
  );
};

export default HomeFooter;
