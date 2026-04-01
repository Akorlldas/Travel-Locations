import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>关于 WorldWide</h2>
          <p>
            WorldWide 是一个基于 React + Leaflet
            的旅行足迹记录应用，帮助用户在地图上标记、保存并回顾去过的城市。
          </p>
          <p>
            WorldWise is an travel locations tracking application based on React
            + Leaflet, helping you mark, save and retrospect the cities you have
            been to.
          </p>
        </div>
      </section>
    </main>
  );
}
