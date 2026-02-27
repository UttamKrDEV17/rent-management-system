const Input = ({
  id,
  label,
  icon: Icon,
  type = "text",
  placeholder,
  name,
  required = false,
  value=undefined
}) => {
  return (
    <div>
      <label
        className="block text-sm font-semibold text-navy mb-1.5"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          className="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg bg-slate-50 text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          id={id}
          name={name || id}
          placeholder={placeholder}
          required={required}
          type={type}
          defaultValue={value}
        />
      </div>
    </div>
  );
};

export default Input;