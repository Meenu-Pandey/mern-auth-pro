import { motion } from "framer-motion";

export default function Card({ children, className = "", hover = false, ...props }) {
  const baseClassName = "rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.25)]";
  const content = (
    <div className={`${baseClassName} ${className}`} {...props}>
      {children}
    </div>
  );

  if (!hover) return content;

  return (
    <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ duration: 0.2 }}>
      {content}
    </motion.div>
  );
}
