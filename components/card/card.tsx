import { formatTime } from "@/helpers/";
import { FC } from "react";
import { Cover, Likes, Link, Paragraph, Tags, Title } from "..";
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
            <Cover src={"./article-heading.png"} />

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
        </article>
    )
};