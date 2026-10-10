import styles from "./Input.module.css";

function Input({ label, id, error, disabled, placeholder, type = "text", value, onChange }) {
  return (
    <div className={`${styles.wrapper} ${error ? styles.error : ""}`}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={styles.input}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}

export default Input;
