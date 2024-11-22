import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

export interface LinkProps {
    children: ReactNode;
    href: Url;
}