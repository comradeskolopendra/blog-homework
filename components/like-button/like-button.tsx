import { FC } from "react";
import styles from "./like-button.module.css";
import { LikeButtonProps } from "./like-button.props";

import ActiveLikeIcon from "./active-like.svg";
import InactveLikeIcon from "./inactive-like.svg";

const LikeButton: FC<LikeButtonProps> = ({isLiked = false, setIsLiked, ...props}) => {

    const handleClick = () => {
        setIsLiked(!isLiked);
    }

    return (
        <button className={styles.button} onClick={handleClick} {...props}>
            {
                isLiked ? <ActiveLikeIcon/> : <InactveLikeIcon/>
            }
        </button>
    )
};

export default LikeButton;