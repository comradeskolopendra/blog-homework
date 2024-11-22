import { Card } from "@/components/card/card";

export default function Home() {
  return (
    <>
      <Card
        description={"Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."}
        title={"Как работать с CSS Grid"}
        tags={["Front-end"]}
        gapTime={1}
        likes={4}
        readTime={3}
        href={"/"}
      />
    </>
  );
}
