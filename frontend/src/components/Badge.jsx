const tones = {
    default: "border-slate-200 bg-slate-100 text-slate-700",
    success: "border-emerald-200 bg-emerald-50 text-emerald-700",
    warning: "border-amber-200 bg-amber-50 text-amber-700",
    danger: "border-rose-200 bg-rose-50 text-rose-700",
    primary: "border-blue-200 bg-blue-50 text-blue-700",
};

export default function Badge({ children, tone = "default", className = "" }) {
    return (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone] || tones.default} ${className}`}>
            {children}
        </span>
    );
}
