import { ReactNode } from "react";

export interface CardProps {
    readTime: number;
    gapTime: number;
    title: string;
    description: ReactNode;
    tags: string[];
    likes: number;
    href: string;
}