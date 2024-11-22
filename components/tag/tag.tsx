import { FC } from "react";
import styles from "./tag.module.css";
import { TagProps } from "./tag.props";

export const Tag: FC<TagProps> = ({children}) => {
    return (
        <p className={styles.tag}>
            {children}
        </p>
    )
};