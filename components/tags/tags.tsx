import { FC } from "react";
import { Paragraph } from "../paragraph/paragraph";
import { TagsProps } from "./tags.props";

export const Tags: FC<TagsProps> = ({tags}) => {
    return (
        <>
            {tags.map(tag => (
                <Paragraph 
                    size="s"
                    color="dark"
                    key={tag}
                >
                    {tag}
                </Paragraph>
            ))}
        </>
    )
};