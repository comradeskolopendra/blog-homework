// "use client"; // - это если компоненту нужна интерактивность, взаимодействией с клиентом напрямую.

import { Card } from "@/components";
import { IPost } from "@/interfaces/post.interface";
import axios from "axios";
import { Metadata } from "next";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "blog app",
    description: "description of blog app"
  }
}

export default async function Home() {

  const { data: posts } = await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")

  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <Card
          description={"Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."}
          title={"Как работать с CSS Grid"}
          tags={["Front-end"]}
          gapTime={1}
          likes={4}
          readTime={3}
          href={"/"}
          key={post.id}
        />
      ))}
    </main>
  );
}
