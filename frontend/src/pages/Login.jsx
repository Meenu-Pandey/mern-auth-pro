import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../AuthContext";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import Badge from "../components/Badge";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  const features = [
    "Encrypted sessions",
    "Instant access",
    "Protected workspace",
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_32%),linear-gradient(135deg,_#f7f8fc_0%,_#f3f6fb_100%)] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto flex max-w-7xl overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_30px_100px_-35px_rgba(15,23,42,0.28)]">
        <div className="relative hidden w-[48%] flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:flex">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-10 top-8 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute bottom-6 right-8 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="absolute right-16 top-24 h-24 w-24 rotate-12 rounded-[2rem] border border-white/10 bg-white/10" />
            <div className="absolute bottom-20 left-16 h-20 w-20 rounded-full border border-white/10" />
          </div>

          <div className="relative z-10">
            <Badge tone="primary" className="border-white/15 bg-white/10 text-slate-100">
              Premium access
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight">
              A calmer way to enter your workspace.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Secure, thoughtful, and beautifully designed for teams who care about every detail.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {features.map((feature) => (
                <span key={feature} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-slate-200">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">✦</div>
              <div>
                <p className="text-sm font-semibold text-white">Trusted by modern product teams</p>
                <p className="text-sm text-slate-300">Fast sign-ins, zero clutter, total clarity.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex-1 px-6 py-10 sm:px-10 lg:px-12"
        >
          <div className="mx-auto flex max-w-md flex-col justify-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Welcome back</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Sign in to continue</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Use your existing account details and continue into your workspace.
              </p>
            </div>

            {error ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600"
              >
                {error}
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                <Input id="email" label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required autoComplete="email" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <PasswordInput id="password" label="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required autoComplete="current-password" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <Button type="submit" loading={submitting} className="w-full">
                  {submitting ? "Signing in..." : "Sign in"}
                </Button>
              </motion.div>
            </form>

            <p className="mt-8 text-center text-sm text-slate-600">
              No account yet?{' '}
              <Link to="/signup" className="font-semibold text-blue-600 transition hover:text-blue-700">
                Create one
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}