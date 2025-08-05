"use client";

import { FC, useEffect, useState } from "react";
import { LikeButtonProps } from "./like-button.props";

import { Button } from "./button/button";

export const LikeButton: FC<LikeButtonProps> = ({isLikedInitial = false, ...props}) => {
    const [isLiked, setIsLiked] = useState(isLikedInitial);
    const [log, setLog] = useState<"set" | "unset">("unset");

    const handleClick = () => {
        setLog(prevState => prevState === "set" ? "unset" : "set");
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "PATCH",
          body: JSON.stringify({isLiked})
        }).then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
        }).then((data) => {
          console.log(data)
        })
    }, [isLiked])

    return (
        <>
            <span className={"visuallyHidden"} role={"log"}>{log === "set" ? "Поставлено" : "Убрано"}</span>
            <Button handleClick={handleClick} isLiked={isLiked} aria-label={isLiked ? "Убрать лайк" :"Поставить лайк"} {...props}/>
        </>
    )
};