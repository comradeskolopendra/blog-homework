// "use client"; // - это если компоненту нужна интерактивность, взаимодействией с клиентом напрямую.

import { Card } from "@/components";
import { Metadata } from "next";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "blog app",
    description: "description of blog app"
  }
}

export default function Home() {

  return (
    <main className={styles.main}>
      <Card
        description={"Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."}
        title={"Как работать с CSS Grid"}
        tags={["Front-end"]}
        gapTime={1}
        likes={4}
        readTime={3}
        href={"/"}
      />

      <Card
        description={"Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."}
        title={"Как работать с CSS Grid"}
        tags={["Front-end"]}
        gapTime={1}
        likes={4}
        readTime={3}
        href={"/"}
      />

      <Card
        description={"Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."}
        title={"Как работать с CSS Grid"}
        tags={["Front-end"]}
        gapTime={1}
        likes={4}
        readTime={3}
        href={"/"}
      />

      {/* <LikeButton isLikedInitial={false} /> */}
    </main>
  );
}
