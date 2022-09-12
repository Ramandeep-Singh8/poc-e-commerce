import Head from "next/head";
import Image from "next/image";
import WelcomePage from "../../components/body/home";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <WelcomePage />
    </div>
  );
}
