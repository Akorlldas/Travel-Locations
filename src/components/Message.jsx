import styles from "./Message.module.css";

function Message({ message }) {
  let message_cn = message === "city" ? "城市" : "国家";

  return (
    <>
      <br />
      <p className={styles.message}>
        Add by clicking on a {message} on the map
      </p>
      <p className={styles.message}>通过点击地图添加{message_cn}</p>
    </>
  );
}

export default Message;
