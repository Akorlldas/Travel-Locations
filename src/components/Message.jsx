import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>Add by clicking on a {message} on the map</p>
  );
}

export default Message;
