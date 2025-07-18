// "use client"; // - это если компоненту нужна интерактивность, взаимодействией с клиентом напрямую.

import {Card} from "@/components";
import { Metadata } from "next";
import styles from "./page.module.css";
import {IPostItem} from "@/types/types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "blog app",
    description: "description of blog app"
  }
}

export default async function Home() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();

  return (
    <main className={styles.main}>
        {posts.map((post: IPostItem) => (
            <Card
                key={"post-" + post.id}
                title={post.title}
                description={post.body}
                tags={["Front-end"]}
                gapTime={1}
                likes={4}
                readTime={3}
                href={`/post/${post.id}`}
            />
        ))}
    </main>
  );
}
