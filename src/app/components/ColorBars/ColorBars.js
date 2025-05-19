"use client";

import styles from "./ColorBars.module.css";

const COLORS = [
  "#e63946", "#f1faee", "#a8dadc",
  "#457b9d", "#1d3557", "#ffbe0b",
  "#fb5607", "#ff006e", "#8338ec",
  "#3a86ff",
];

export default function ColorBars() {
  return (
    <div className={styles.container}>
      {COLORS.map((color, i) => (
        <div
          key={i}
          className={styles.bar}
          style={{
            backgroundColor: color,
            animationDelay: `${i * 0.8}s`
          }}
        />
      ))}
    </div>
  );
}
