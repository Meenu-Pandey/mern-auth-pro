export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
    const alignClass = align === "center" ? "text-center" : "text-left";

    return (
        <div className={alignClass}>
            {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">{eyebrow}</p> : null}
            {title ? <h2 className="mt-2 text-2xl font-semibold text-slate-950">{title}</h2> : null}
            {description ? <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p> : null}
        </div>
    );
}
