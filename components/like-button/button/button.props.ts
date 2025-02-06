import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLiked?: boolean;
    handleClick: (event?: MouseEvent<HTMLButtonElement>) => void;
}