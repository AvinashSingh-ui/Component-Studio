import styles from "./Badge.module.css";

function Badge({ children, variant = "primary" }) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {children}
    </span>
  );
}

export default Badge;
