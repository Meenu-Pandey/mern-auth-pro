import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAccessToken } from "../api";

function decodeExpiry(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000;
  } catch {
    return null;
  }
}

export default function SessionBadge() {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    const tick = () => {
      const token = getAccessToken();
      if (!token) return setRemaining(null);
      const expiryMs = decodeExpiry(token);
      if (!expiryMs) return setRemaining(null);
      setRemaining(Math.max(0, Math.floor((expiryMs - Date.now()) / 1000)));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (remaining === null) return null;

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const isWarn = remaining < 60;

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium
        ${isWarn ? "border-orange-200 bg-orange-50 text-orange-700" : "border-brand-100 bg-brand-50 text-brand-700"}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping
            ${isWarn ? "bg-orange-400" : "bg-brand-500"}`}
        />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${isWarn ? "bg-orange-500" : "bg-brand-500"}`} />
      </span>
      session · {mins}:{secs.toString().padStart(2, "0")}
    </motion.div>
  );
}