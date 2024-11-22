import { FC } from "react";
import Like from "./assets/like.svg";
import styles from "./likes.module.css";
import { LikesProps } from "./likes.props";

export const Likes: FC<LikesProps> = ({children}) => {

    return (
        <div className={styles.likes}>
            {children}
            <Like />
        </div>
    )
};