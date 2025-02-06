"use client";

import GithubIcon from "./assets/github.svg";
import styles from './header.module.css';

import Link from "next/link";

import { AppContext } from "@/context/app.context";
import { useContext } from "react";


export const Header = () => {
    const githubLink = useContext(AppContext);

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                skolopendrovskie dela
            </h1>

            <Link href={githubLink}>
                <GithubIcon />
            </Link>
        </header>
    )
};