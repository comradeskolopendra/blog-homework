import {FC} from "react";

interface ArticleProps {
    params: Promise<{id: string}>
}

const Article: FC<ArticleProps> = async ({params}) => {
    const {id} = await params;

    return (
        <>
            {id}
        </>
    )
};

export default Article;