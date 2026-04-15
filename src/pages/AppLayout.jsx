import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { useState } from "react";

import styles from "./AppLayout.module.css";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleSidebar() {
    setIsSidebarOpen((open) => !open);
  }

  return (
    <div className={styles.app}>
      <button
        type="button"
        className={styles.sidebarToggle}
        onClick={handleToggleSidebar}
      >
        {isSidebarOpen ? ">" : "<"}
      </button>
      <Sidebar isOpen={isSidebarOpen} />
      <Map onToggleSidebar={setIsSidebarOpen} />
      <User />
    </div>
  );
}

export default AppLayout;
