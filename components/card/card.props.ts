import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CardProps
    extends
        Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart" | "ref">{
    readTime: number;
    gapTime: number;
    title: string;
    description: ReactNode;
    tags: string[];
    likes: number;
    href: string;
}