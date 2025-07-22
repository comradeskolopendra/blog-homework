import styles from "@/app/post/[id]/post.module.css";
import {Paragraph} from "@/components";
import {FC} from "react";
import {ICommentItem} from "@/types/types";

interface CommentProps {
    comment: ICommentItem;
}

export const Comment: FC<CommentProps> = ({comment}) => {
    return (
        <div className={styles.comment}>
            <div className={styles.commentHead}>
                <Paragraph className={styles.name}>{comment.name}</Paragraph>
                <span className={styles.divider}/>
                <Paragraph>{comment.email}</Paragraph>
            </div>

            <Paragraph className={styles.commentBody} size={"m"}>{comment.body}</Paragraph>
        </div>
    )
};