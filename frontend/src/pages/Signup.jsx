import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../AuthContext";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import Badge from "../components/Badge";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await signup(form.name, form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setSubmitting(false);
    }
  };

  const highlights = ["Secure onboarding", "Instant account setup", "Built for modern teams"];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_32%),linear-gradient(135deg,_#f7f8fc_0%,_#f3f6fb_100%)] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto flex max-w-7xl overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_30px_100px_-35px_rgba(15,23,42,0.28)]">
        <div className="relative hidden w-[48%] flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:flex">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-12 top-8 h-56 w-56 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="absolute right-16 top-20 h-28 w-28 rotate-12 rounded-[2.25rem] border border-white/10 bg-white/10" />
            <div className="absolute left-16 bottom-24 h-20 w-20 rounded-full border border-white/10" />
          </div>

          <div className="relative z-10">
            <Badge tone="primary" className="border-white/15 bg-white/10 text-slate-100">
              New account
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight">
              Create a workspace your team will love.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Join with a thoughtful setup experience built to feel effortless from the first click.
            </p>
            <div className="mt-8 space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-200">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-white">Security-first onboarding</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Every detail is designed to feel polished, clear, and reassuring.</p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Get started</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Create your account</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Set up your profile with the same secure flow, now presented with a premium experience.
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
                <Input id="name" label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required autoComplete="name" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Input id="email" label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required autoComplete="email" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <PasswordInput id="password" label="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required minLength={6} autoComplete="new-password" hint="Use at least 8 characters for a stronger passphrase." />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Button type="submit" loading={submitting} className="w-full">
                  {submitting ? "Creating account..." : "Create account"}
                </Button>
              </motion.div>
            </form>

            <p className="mt-8 text-center text-sm text-slate-600">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-blue-600 transition hover:text-blue-700">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}