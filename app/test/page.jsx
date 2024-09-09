import styles from "./test.module.css";

const TestRoute = () => {
  const bg = false;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Test Page</h1>
      <p className={styles["home-p"]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
        dignissimos?
      </p>

      <p className={styles[`${bg === true ? "home-p" : "test-p"}`]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
        dignissimos?
      </p>
    </div>
  );
};

export default TestRoute;
