import React from "react";

function initials(name = "") {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function colorFromString(s = "") {
  let hash = 0;
  for (let i = 0; i < s.length; i++) hash = s.charCodeAt(i) + ((hash << 5) - hash);
  const h = Math.abs(hash) % 360;
  return `hsl(${h} 60% 70%)`;
}

export default function Avatar({ name = "User", size = 40 }) {
  const text = initials(name);
  const bg = colorFromString(name);
  return (
    <div
      aria-hidden
      className="inline-flex items-center justify-center rounded-full font-semibold text-white"
      style={{ width: size, height: size, background: bg }}
    >
      {text}
    </div>
  );
}
