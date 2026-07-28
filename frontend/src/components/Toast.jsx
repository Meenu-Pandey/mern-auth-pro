import { motion } from "framer-motion";

const styles = {
    success: "border-emerald-200 bg-emerald-50 text-emerald-700",
    error: "border-rose-200 bg-rose-50 text-rose-700",
    info: "border-blue-200 bg-blue-50 text-blue-700",
};

export default function Toast({ message, tone = "info" }) {
    if (!message) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className={`rounded-2xl border px-4 py-3 text-sm font-medium shadow-sm ${styles[tone] || styles.info}`}
        >
            {message}
        </motion.div>
    );
}
