import { FC } from "react";
import styles from "./time.module.css";
import { TimeProps } from "./time.props";

export const Time: FC<TimeProps> = ({children}) => {
    return <p className={styles.time}>{children}</p>
}