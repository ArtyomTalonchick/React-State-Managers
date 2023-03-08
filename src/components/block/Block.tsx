import React from "react";
import { PostType } from "../../types/PostsTypes";
import Error from "../error/Error";
import Loader from "../loader/Loader";
import Pagination, { PaginationPropsType } from "../pagination/Pagination";
import PostsList from "../posts/list/PostsList";
import RequestOptions, { RequestOptionsPropsType } from "../requestOptions/RequestOptions";
import S from "./Block.styled";

interface PropsType extends PaginationPropsType, RequestOptionsPropsType {
    title: string;
    data: PostType[];
    isLoading: boolean;
    isError: boolean;
} 

const Block: React.FC<PropsType> = ({
    title,
    data,
    isLoading,
    isError,
    
    delay,
    throwError,
    onChangeDelay,
    onChangeThrowError,

    page,
    pageSize,
    onChangePage,
    onChangePageSize,
}) => (
    <S.container>
        <S.toolbar>
            <S.title>
                {title}
            </S.title>
            <RequestOptions
                delay={delay}
                throwError={throwError}
                onChangeDelay={onChangeDelay}
                onChangeThrowError={onChangeThrowError}
            />
            <Pagination
                page={page}
                pageSize={pageSize}
                onChangePageSize={onChangePageSize}
                onChangePage={onChangePage}
            />
        </S.toolbar> 
        <PostsList data={data} />
        {isLoading && (
            <Loader />
        )}
        {isError && (
            <Error text="Some server error" />
        )}
    </S.container>
);

export default Block;
