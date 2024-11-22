import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    level: 1 | 2 | 3 | 4 | 5 | 6;
}