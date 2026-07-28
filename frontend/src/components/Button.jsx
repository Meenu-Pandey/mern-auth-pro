import React from "react";
import { motion } from "framer-motion";
import Spinner from "./Spinner";

export default function Button({ children, className = "", loading = false, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-slate-950 text-white shadow-[0_16px_32px_-16px_rgba(15,23,42,0.45)] hover:bg-slate-800",
    secondary: "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      whileHover={{ y: -1, scale: 1.005 }}
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant] || variants.primary} ${className}`}
    >
      {loading ? <Spinner className="h-4 w-4" /> : null}
      <span>{children}</span>
    </motion.button>
  );
}
