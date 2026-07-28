import React from "react";
import { motion } from "framer-motion";

export default function FormError({ children }) {
  if (!children) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full rounded-md bg-red-50 border border-red-100 text-red-700 text-sm px-3 py-2"
    >
      {children}
    </motion.div>
  );
}
