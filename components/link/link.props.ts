import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    children: ReactNode;
}