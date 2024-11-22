import { Card } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Card
        description={
          <>
            <span className={styles.note}>Грид-раскладка (CSS Grid Layout)</span> представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..
          </>
        }
        title="Как работать с CSS Grid"
        tags={["Front-end"]}
        gapTime={1}
        likes={4}
        readTime={3}
        href="/"
      />
    </>
  );
}
