import React from "react";

export default function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  autoComplete,
  placeholder = " ",
  error,
  hint,
  ...props
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-label={label}
        className={`peer w-full rounded-2xl border bg-slate-50 px-4 pt-6 pb-3 text-sm text-slate-900 shadow-sm transition placeholder-transparent focus:outline-none focus:ring-4 ${error
            ? "border-rose-300 bg-rose-50 focus:border-rose-400 focus:ring-rose-100"
            : "border-slate-200 focus:border-brand-500 focus:bg-white focus:ring-brand-100"
          }`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 top-3 text-sm transition-all ${error ? "text-rose-500" : "text-slate-500"
          } peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:top-3 peer-focus:text-xs peer-focus:text-brand-600`}
      >
        {label}
      </label>
      {error ? <p className="mt-2 text-xs text-rose-500">{error}</p> : null}
      {!error && hint ? <p className="mt-2 text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}
