"use client"; // - это если компоненту нужна интерактивность, взаимодействией с клиентом напрямую.

import { Card } from "@/components/card/card";
import LikeButton from "@/components/like-button/like-button";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({isLiked})
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    }).then((data) => {
      console.log("data received")
    })
  }, [isLiked])

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

      <LikeButton isLiked={isLiked} setIsLiked={setIsLiked}/>
    </>
  );
}
