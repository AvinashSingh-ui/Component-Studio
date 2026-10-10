import { Button, Badge, Card, Input } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Component Studio</h1>
        <p className={styles.subtitle}>Reusable components. Consistent design.</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Button</h2>
        <div className={styles.row}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Badge</h2>
        <div className={styles.row}>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Card</h2>
        <div className={styles.grid}>
          <Card
            title="User Profile"
            description="Manage your personal account settings and preferences."
            footer={<Button variant="primary">Edit Profile</Button>}
          />
          <Card
            title="Notifications"
            description="Stay up to date with alerts, messages, and activity updates."
            footer={<Button variant="secondary">View All</Button>}
          />
          <Card
            title="Analytics"
            description="Track performance metrics and usage statistics over time."
            footer={<Badge variant="success">Active</Badge>}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Input</h2>
        <div className={styles.inputGroup}>
          <Input id="name" label="Full Name" placeholder="John Doe" />
          <Input id="email" label="Email" type="email" placeholder="john@example.com" />
          <Input id="disabled-input" label="Disabled" placeholder="Not editable" disabled />
          <Input id="error-input" label="Username" placeholder="Enter username" error="Username is already taken." />
        </div>
      </section>
    </main>
  );
}

export default App;