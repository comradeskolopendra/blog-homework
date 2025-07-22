import {InputProps} from "./input.props";
import {FC} from "react";
import clsx from "clsx";

import styles from "./input.module.css";


export const Input: FC<InputProps> = ({className, error, ...rest}) => {

    return (
        <div className={clsx(styles.wrapper, className)}>
            <input
                className={clsx(styles.input, {
                    [styles.error]: error
                })}
                {...rest}
            />
            {error && <span className={styles.message}>{error.message}</span>}
        </div>
    )
};