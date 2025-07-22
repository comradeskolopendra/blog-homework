import {FC} from "react";
import {ButtonProps} from "./button.props";
import clsx from "clsx";
import styles from "./button.module.css";

export const Button: FC<ButtonProps> = ({className, children, ...rest}) => {
    return (
        <button className={clsx(className, styles.button)} {...rest}>{children}</button>
    )
}