import { PostType } from "../types/PostsTypes";
import getApi, { ApiOptionsType } from "./api";

interface OptionsType extends ApiOptionsType {
    page: number;
    pageSize: number;
}

const getPostsList = ({ page, pageSize, ...options }: OptionsType) => (
    getApi(options)
        .get(
            "posts",
            {
                searchParams: {
                    _limit: pageSize,
                    _start: pageSize * page,
                },
            }
        )
        .json<PostType[]>()
);

export default getPostsList;
