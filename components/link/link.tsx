import NextLink from "next/link";
import { FC } from "react";
import Arrow from "./assets/arrow.svg";
import styles from "./link.module.css";
import { LinkProps } from "./link.props";

export const Link: FC<LinkProps> = ({href, children}) => {
    return (
        <NextLink className={styles.link} href={href}>
            {children} 
            <Arrow/>
        </NextLink>
    )
};