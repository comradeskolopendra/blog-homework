"use client";

import { formatTime } from "@/helpers/";
import { Cover, Likes, Link, Paragraph, Tags, Title } from "..";
import styles from "./card.module.css";
import { CardProps } from "./card.props";
import {motion, useAnimation} from "motion/react";
import {useEffect} from "react";

export const Card = motion.create<CardProps>(({
    description,
    gapTime,
    likes,
    readTime,
    tags,
    title,
    href
}) => {
    const controls = useAnimation()

    const variants = {
        "hidden": {
            y: 100,
            opacity: 0,
        },
        "visible": {
            y: 0,
            opacity: 1,
        }
    }

    useEffect(() => {
        if (controls) {
            controls.start("visible")
        }
    }, [controls]);

    return (
        <motion.article
            animate={controls}
            variants={variants}
            initial={"hidden"}
            className={styles.article}
        >
            <Cover src={"./article-heading.png"} alt={"test"} />

            <section className={styles.main}>
                <div className={styles.info}>
                    <div className={styles.infoLeftside}>
                        <Tags tags={tags} />

                        <span className={styles.divider} />

                        <Paragraph size="s">
                            {gapTime} {formatTime(gapTime, ["месяц", "месяца", "месяцев"])} назад
                        </Paragraph>
                    </div>

                    <Likes>{likes}</Likes>
                </div>

                <div>
                    <Title level={3} className={styles.title}>
                        {title}
                    </Title>

                    <Paragraph>
                        {description}
                    </Paragraph>
                </div>
            </section>

            <section className={styles.footer}>
                <Paragraph size="s">
                    {readTime} {formatTime(readTime, ["минута", "минуты", "минут"])}
                </Paragraph>

                <Link href={href}>Читать</Link>
            </section>
        </motion.article>
    )
});