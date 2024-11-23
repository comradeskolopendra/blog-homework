import clsx from "clsx";
import { FC } from "react";
import styles from "./title.module.css";
import { TitleProps } from "./title.props";


export const Title: FC<TitleProps> = ({level, className, children}) => {
    const Tag: `h${typeof level}` = `h${level}`;
    const classname = styles[Tag];

    return <Tag className={clsx(styles.title, classname, className)}>{children}</Tag>
};