import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

function scorePassword(pw = "") {
  let score = 0;
  if (pw.length >= 8) score += 1;
  if (/[A-Z]/.test(pw)) score += 1;
  if (/[0-9]/.test(pw)) score += 1;
  if (/[^A-Za-z0-9]/.test(pw)) score += 1;
  return score;
}

export default function PasswordInput({
  id = "password",
  label = "Password",
  value,
  onChange,
  required = false,
  autoComplete = "new-password",
  error,
  hint,
}) {
  const [visible, setVisible] = useState(false);
  const strength = useMemo(() => scorePassword(value || ""), [value]);

  const strengthLabel = ["Too short", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = ["bg-rose-400", "bg-rose-500", "bg-amber-400", "bg-emerald-400", "bg-emerald-600"][strength];

  return (
    <div>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          placeholder=" "
          aria-label={label}
          className={`peer w-full rounded-2xl border bg-slate-50 px-4 pt-6 pb-3 text-sm text-slate-900 shadow-sm transition placeholder-transparent focus:outline-none focus:ring-4 ${error
              ? "border-rose-300 bg-rose-50 focus:border-rose-400 focus:ring-rose-100"
              : "border-slate-200 focus:border-brand-500 focus:bg-white focus:ring-brand-100"
            }`}
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-4 top-3 text-sm transition-all ${error ? "text-rose-500" : "text-slate-500"
            } peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:top-3 peer-focus:text-xs peer-focus:text-brand-600`}
        >
          {label}
        </label>
        <button
          type="button"
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={() => setVisible((s) => !s)}
          className="absolute right-2 top-3 inline-flex rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none"
        >
          {visible ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.03 3.97a.75.75 0 011.06 0l10.94 10.94a.75.75 0 11-1.06 1.06L14.12 14.6A9.47 9.47 0 0110 15.5c-4.97 0-8.59-4-9.19-4.81a1.45 1.45 0 010-1.88C1.38 8.04 5.03 4 10 4c1.18 0 2.3.18 3.33.52L8.2 1.9a.75.75 0 00-1.17.07L4.03 3.97z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(strength / 4) * 100}%` }}
            className={`h-2 ${strengthColor}`}
          />
        </div>
        <span className="text-xs font-medium text-slate-500">{strengthLabel}</span>
      </div>
      {error ? <p className="mt-2 text-xs text-rose-500">{error}</p> : null}
      {!error && hint ? <p className="mt-2 text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}
