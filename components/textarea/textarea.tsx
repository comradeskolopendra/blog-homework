import {FC} from "react";
import {TextareaProps} from "@/components/textarea/textarea.props";
import clsx from "clsx";
import styles from "./textarea.module.css";


export const Textarea: FC<TextareaProps> = ({className, error, ...rest}) => {

    return (
        <div className={clsx(styles.wrapper, className)}>
            <textarea
                className={clsx(styles.textarea, {
                    [styles.error]: error
                })}
                {...rest}
            />
            {error && <span className={styles.message}>{error.message}</span>}
        </div>
    )
};