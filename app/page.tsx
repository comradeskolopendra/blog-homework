// "use client"; // - это если компоненту нужна интерактивность, взаимодействией с клиентом напрямую.

import { Card } from "@/components";
import styles from "./page.module.css";

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
    </main>
  );
}
