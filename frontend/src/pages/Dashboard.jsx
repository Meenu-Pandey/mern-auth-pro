import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../AuthContext";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import Card from "../components/Card";
import SessionBadge from "../components/SessionBadge";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const profileItems = [
    { label: "Name", value: user?.name || "—" },
    { label: "Email", value: user?.email || "—" },
    { label: "Region", value: "US West" },
  ];

  const actions = [
    { title: "Review profile", description: "Keep your account details up to date." },
    { title: "Manage security", description: "Protect your session with a strong password." },
  ];

  const activity = [
    { title: "Signed in", detail: "Your access session is active" },
    { title: "Security check", detail: "Password and session state verified" },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_30%),linear-gradient(135deg,_#f7f8fc_0%,_#f3f6fb_100%)] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mx-auto max-w-7xl rounded-[36px] border border-slate-200 bg-white p-6 shadow-[0_30px_100px_-35px_rgba(15,23,42,0.28)] sm:p-8 lg:p-10"
      >
        <header className="flex flex-col gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <Avatar name={user?.name} size={60} />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold text-slate-950">Welcome back</h1>
                <SessionBadge />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {user?.email || "Your account is ready to go."}
              </p>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -1, scale: 1.005 }}
            onClick={handleLogout}
            className="rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            Log out
          </motion.button>
        </header>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <Card hover className="bg-slate-50 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Account overview</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">{user?.name || "Your workspace"}</h2>
                </div>
                <Badge tone="success">Active</Badge>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-500">Plan</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">Pro</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-500">Status</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">Verified</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-500">Access</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">Secure</p>
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-950">Profile</h3>
                <span className="text-sm text-slate-500">Updated just now</span>
              </div>
              <div className="mt-5 divide-y divide-slate-200">
                {profileItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3.5">
                    <span className="text-sm text-slate-500">{item.label}</span>
                    <span className="max-w-[60%] text-right text-sm font-semibold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card hover className="bg-slate-950 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Session</p>
              <h3 className="mt-2 text-xl font-semibold">Session active and protected</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Your access token remains active while the refresh flow continues in the background.
              </p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Authentication state</span>
                  <span className="font-semibold text-white">Verified</span>
                </div>
              </div>
            </Card>

            <Card hover>
              <h3 className="text-lg font-semibold text-slate-950">Quick actions</h3>
              <div className="mt-4 space-y-3">
                {actions.map((action) => (
                  <div key={action.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">{action.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{action.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card hover>
              <h3 className="text-lg font-semibold text-slate-950">Recent activity</h3>
              <div className="mt-4 space-y-3">
                {activity.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-blue-50 text-sm text-blue-600">↗</div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}