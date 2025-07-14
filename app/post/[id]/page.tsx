import {FC} from "react";
import {Likes, Paragraph, Tags, Title} from "@/components";

import styles from "./post.module.css";
import {formatTime} from "@/helpers";

interface ArticleProps {
    params: Promise<{id: string}>
}

const Article: FC<ArticleProps> = async ({params}) => {
    const {id} = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json();

    return (
        <main className={styles.post}>
            <div className={styles.heading}>
                <Title level={1} className={styles.title}>{data.title}</Title>

                <div className={styles.headerInfo}>
                    <Tags tags={["Front-end"]}/>

                    <span className={styles.divider} />

                    <Paragraph size={"s"}>
                        1 {formatTime(1, ["месяц", "месяца", "месяцев"])} назад
                    </Paragraph>

                    <span className={styles.divider} />

                    <Paragraph size="s">
                        3 {formatTime(3, ["минута", "минуты", "минут"])}
                    </Paragraph>

                    <span className={styles.divider} />

                    <Likes>4</Likes>
                </div>
            </div>

            <img className={styles.headingImage} src={"/article-heading.png"} alt={"article heading image"}/>

            <div className={styles.body} dangerouslySetInnerHTML={{__html: data.body}}/>
        </main>
    )
};

export default Article;