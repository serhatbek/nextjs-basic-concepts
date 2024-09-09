import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles["home-p"]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
        dignissimos?
      </p>
    </div>
  );
};

export default HomePage;
