import styled, { css } from "styled-components";

const controlItem = css`
    cursor: pointer;
    outline: none;
    border: none;
    padding: 4px 16px;
    background-color: ${({ theme }) => theme.colors.grey[0]};

    &:hover {
        background-color: ${({ theme }) => theme.colors.grey[1]};
    }
    &:active {
        background-color: ${({ theme }) => theme.colors.grey[2]};
    }
`;

const controlParent = css`
    ${controlItem}
    border-radius: 4px;
`;

const C = {
    button: styled.button`
        ${controlParent}
    `,
    field: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 0;
    `,
    fieldTitle: styled.div`
        min-width: 80px;

        span {
            margin-left: 4px;
        }
    `,
    input: styled.input`
        ${controlParent}
        cursor: text;
    `,
    select: styled.select`
        ${controlParent}
    `,
    option: styled.option`
        ${controlItem}
    `,
};

export default C;