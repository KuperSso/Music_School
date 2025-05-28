import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "./css/OfficeLayout.module.css";

export default function OfficeLayout() {
  return (
    <div className={`${styles.office}`}>
      <Sidebar />
      <div className={`${styles.content}`}>
        <Outlet />
      </div>
    </div>
  );
}
