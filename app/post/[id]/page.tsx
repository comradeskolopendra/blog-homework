import {FC} from "react";

interface ArticleProps {
    params: Promise<{id: string}>
}

const Article: FC<ArticleProps> = async ({params}) => {
    const {id} = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json();

    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </>
    )
};

export default Article;