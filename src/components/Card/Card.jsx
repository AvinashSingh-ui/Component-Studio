import styles from "./Card.module.css";

function Card({ title, description, footer, children }) {
  return (
    <div className={styles.card}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      {children}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

export default Card;
