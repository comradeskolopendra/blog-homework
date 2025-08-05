"use client";

import { FC, useEffect, useState } from "react";
import { LikeButtonProps } from "./like-button.props";

import { Button } from "./button/button";

export const LikeButton: FC<LikeButtonProps> = ({isLikedInitial = false, ...props}) => {
    const [isLiked, setIsLiked] = useState(isLikedInitial);

    const handleClick = () => {
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

    return <Button handleClick={handleClick} isLiked={isLiked} aria-label={"Поставить лайк"} {...props}/>
};