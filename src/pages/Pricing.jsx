// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>为了您的体验，我们推荐以下设置：</h2>
          <hr />
          <br />
          <p>
            由于Windows电脑端浏览器通常不显示国旗图标，为了不影响您的使用体验，我们建议您在使用前给浏览器安装插件Country
            Flag Fixer
          </p>

          <p>
            Since Windows desktop browsers usually do not display the flag
            icons, to ensure your experience is not affected, we recommend
            installing the Country Flag Fixer plugin before using it.
          </p>
          <hr />
          <br />
          <p>
            当前登录是前端假登录，演示登录账号为：
            <br />
            邮箱：nana@example.com
            <br />
            密码：1234567890
          </p>

          <p>
            Authentication is mock-only (front-end fake auth), Demo login
            credentials:
            <br />
            Email: nana@example.com
            <br />
            Password: 1234567890
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
