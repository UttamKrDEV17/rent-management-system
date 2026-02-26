import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function LoginToggle() {
  const [searchParams,setSearchParams] = useSearchParams();
  const type = searchParams.get("type") || "owner";
  const [active, setActive] = useState(type);

  const handleToggle = (value) => {
    setActive(value);
    setSearchParams({type: value},{replace: true})
  }

  return (
    <div className="flex items-center bg-slate-100 rounded-xl p-1 w-full mb-8">
      <button
        onClick={() => handleToggle("tenant")}
        className={`flex-1 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
          active === "tenant"
            ? "bg-white text-slate-800 shadow-sm"
            : "text-slate-400 hover:text-slate-600"
        }`}
      >
        Tenant Login
      </button>
      <button
        onClick={() => handleToggle("owner")}
        className={`flex-1 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
          active === "owner"
            ? "bg-white text-slate-800 shadow-sm"
            : "text-slate-400 hover:text-slate-600"
        }`}
      >
        Owner Login
      </button>
    </div>
  );
}