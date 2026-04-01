import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>WorldWise keeps track of your adventures.</h1>
        <h2>帮助您在地图上标记、保存并回顾去过的城市!</h2>

        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
