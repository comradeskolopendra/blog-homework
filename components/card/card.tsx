import { formatTime } from "@/helpers/helpers";
import { FC } from "react";
import { Likes, Link, Tag, Time } from "../";
import styles from "./card.module.css";
import { CardProps } from "./card.props";


export const Card: FC<CardProps> = ({
    description,
    gapTime,
    likes,
    readTime,
    tags,
    title,
    href
}) => {
    return (
        <article className={styles.article}>
            <img className={styles.heading} src="./article-heading.png" alt="" />

            <section className={styles.main}>
                <div className={styles.info}>
                    <div className={styles.infoLeftside}>
                        {tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                        ))}

                        <span className={styles.divider} />

                        <Time>{gapTime} {formatTime(gapTime, ["месяц", "месяца", "месяцев"])} назад</Time>
                    </div>

                    <Likes>{likes}</Likes>
                </div>

                <div>
                    <h3 className={styles.title}>
                        {title}
                    </h3>

                    <p className={styles.description}>
                        {description}
                    </p>
                </div>
            </section>

            <section className={styles.footer}>
                <Time>{readTime} {formatTime(readTime, ["минута", "минуты", "минут"])}</Time>

                <Link href={href}>Читать</Link>
            </section>
        </article>
    )
};