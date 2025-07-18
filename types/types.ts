export interface IPostItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ICommentItem {
    body: string;
    name: string;
    id: number;
    postId: number;
    email: string;
}