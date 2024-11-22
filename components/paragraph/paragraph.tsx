import clsx from "clsx";
import { FC } from "react";
import styles from "./paragraph.module.css";
import { ParagraphProps } from "./paragraph.props";

export const Paragraph: FC<ParagraphProps> = ({children, size = "m", className, color = "default"}) => {
    return (
    <p className={clsx(styles.paragraph, className, {
        [styles.small]: size === "s",
        [styles.dark]: color === "dark"
    })}>
        {children}
    </p>
    )
}