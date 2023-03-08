import React, { useEffect, useState } from "react";
import getPostsList from "../../../api/getPostsList";
import { PostType } from "../../../types/PostsTypes";
import Block from "../../block/Block";

const StatefulComponentState: React.FC = () => {
    const [data, setData] = useState<PostType[]>([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [delay, setDelay] = useState(0);
    const [throwError, setThrowError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async() => {
            try {
                setIsLoading(true);
                setIsError(false);
                setData([]);

                const response = await getPostsList({
                    page,
                    pageSize,
                    delay,
                    throwError,
                });

                setData(response);
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();

    }, [page, pageSize, delay, throwError]);

	return (
        <Block
            title="Component state"
            data={data}
            isLoading={isLoading}
            isError={isError}

            delay={delay}
            throwError={throwError}
            onChangeDelay={setDelay}
            onChangeThrowError={setThrowError}
            
            page={page}
            pageSize={pageSize}
            onChangePageSize={setPageSize}
            onChangePage={setPage}
        />
    );
}

export default StatefulComponentState;
