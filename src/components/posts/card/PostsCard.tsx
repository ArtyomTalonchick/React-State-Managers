import React from "react";
import { PostType } from "../../../types/PostsTypes";
import S from "./PostsCard.styled";

interface PropsType {
    dataItem: PostType;
} 

const PostsCard: React.FC<PropsType> = ({ dataItem }) => (
    <S.container>
        <S.header>
            <S.id>
                {dataItem.id}
            </S.id>
            <S.title>
                {dataItem.title}
            </S.title>
        </S.header>
        <S.body>
            {dataItem.body}
        </S.body>
    </S.container>
);

export default PostsCard;
