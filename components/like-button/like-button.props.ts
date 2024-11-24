import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


export interface LikeButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLiked?: boolean;
    setIsLiked: (isLiked: boolean) => void;
}