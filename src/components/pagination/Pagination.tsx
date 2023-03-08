import React from "react";
import C from "../../styledComponents";
import S from "./Pagination.styled";

export interface PaginationPropsType {
    page: number;
    pageSize: number;
    onChangePage: (page: number) => void;
    onChangePageSize: (pageSize: number) => void;
}

const TOTAL_ITEMS = 100;

const Pagination: React.FC<PaginationPropsType> = ({
    page,
    pageSize,
    onChangePage,
    onChangePageSize,
}) => {
    const firstPage = 0;
    const lastPage = Math.ceil(TOTAL_ITEMS / pageSize) - 1;

    const disableDecrease = page <= firstPage;
    const disableIncrease = page >= lastPage;

    const handleChangePageSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = +event.target.value || pageSize;
        onChangePageSize(newPageSize);
        onChangePage(0);
    };

    const handleFirstPage = () => {
        onChangePage(firstPage);
    };

    const handlePrevPage = () => {
        onChangePage(page - 1);
    };

    const handleNextPage = () => {
        onChangePage(page + 1);
    };

    const handleLastPage = () => {
        onChangePage(lastPage);
    };

    return (
        <S.container>
            <C.field>
                <C.fieldTitle>
                    Page Size:
                </C.fieldTitle>
                <C.select value={pageSize} onChange={handleChangePageSize}>
                    {[3, 5, 10, 15, 20, 50, 100].map((size) => (
                        <C.option key={size} value={size}>{size}</C.option>
                    ))}
                </C.select>
            </C.field>
            <C.field>
                <C.fieldTitle>
                    Page:
                    <span>
                        {page + 1}
                    </span>
                </C.fieldTitle>
                <C.button onClick={handleFirstPage} disabled={disableDecrease}>
                    First
                </C.button>
                <C.button onClick={handlePrevPage} disabled={disableDecrease}>
                    Prev
                </C.button>
                <C.button onClick={handleNextPage} disabled={disableIncrease}>
                    Next
                </C.button>
                <C.button onClick={handleLastPage} disabled={disableIncrease}>
                    Last
                </C.button>
            </C.field>
        </S.container>
    );
};

export default Pagination;
