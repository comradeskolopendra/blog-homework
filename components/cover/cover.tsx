import clsx from "clsx";
import { FC } from "react";
import styles from "./cover.module.css";
import { CoverProps } from "./cover.props";

export const Cover: FC<CoverProps> = ({src, alt, className}) => {
    return <img className={clsx(styles.heading, className)} src={src} alt={alt} />
};