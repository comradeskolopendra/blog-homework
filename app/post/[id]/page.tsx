import {FC} from "react";
import {LikeButton, Likes, Paragraph, Tags, Title} from "@/components";

import styles from "./post.module.css";
import {formatTime} from "@/helpers";
import {ICommentItem, IPostItem} from "@/types/types";
import Image from "next/image";
import {Comment} from "@/app/post/[id]/_components/comment/comment";
import {Form} from "@/app/post/[id]/_components/form/form";

interface ArticleProps {
    params: Promise<{id: string}>
}

const Article: FC<ArticleProps> = async ({params}) => {
    const {id} = await params;

    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post: IPostItem = await postResponse.json();

    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    const comments: ICommentItem[] = await commentsResponse.json()


    return (
        <main className={styles.post}>
            <div className={styles.heading}>
                <Title level={1} className={styles.title}>{post.title}</Title>

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

            <Image width={800} height={500} src={"/article-heading.png"} alt={"article heading image"} quality={100} />

            <div className={styles.body} dangerouslySetInnerHTML={{__html: post.body}}/>

            <div className={styles.like}>
                <Paragraph size={"m"}>Понравилось? Жми</Paragraph>
                <LikeButton/>
            </div>

            <div className={styles.commentsBlock}>
                <Title level={2}>
                    Комменатрии
                </Title>

                <div className={styles.comments}>
                    {comments.map((comment) => (
                        <Comment comment={comment}  key={`${comment.email}-${comment.id}`} />
                    ))}
                </div>
            </div>

            <Form/>
        </main>
    )
};

export default Article;