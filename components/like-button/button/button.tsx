"use client";

import { FC } from "react";
import styles from "./button.module.css";
import { ButtonProps } from "./button.props";

import ActiveLikeIcon from "./assets/active-like.svg";
import InactveLikeIcon from "./assets/inactive-like.svg";

export const Button: FC<ButtonProps> = ({handleClick, isLiked, ...props}) => {
    return (
        <button className={styles.button} onClick={handleClick} {...props}>
            {
                isLiked ? <ActiveLikeIcon/> : <InactveLikeIcon/>
            }
        </button>
    )
}