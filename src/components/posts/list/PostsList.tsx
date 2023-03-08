import React from "react";
import { PostType } from "../../../types/PostsTypes";
import PostsCard from "../card/PostsCard";
import S from "./PostsList.styled";

interface PropsType {
    data: PostType[];
} 

const PostsList: React.FC<PropsType> = ({ data }) => (
    <S.container>
        {data.map((dataItem) => (
            <PostsCard key={dataItem.id} dataItem={dataItem} />
        ))}
    </S.container>
);

export default PostsList;
