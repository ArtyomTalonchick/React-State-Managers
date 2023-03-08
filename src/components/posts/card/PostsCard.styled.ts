import styled, { css } from "styled-components";

const S = {
    container: styled.div`
        padding: 16px;
        border: 1px solid;
        border: ${({ theme }) => css`1px solid ${theme.colors.grey[1]}`};
        border-radius: 8px;
        max-width: 300px;
        flex-shrink: 0;
    `,
    header: styled.div`
        border-bottom: ${({ theme }) => css`1px solid ${theme.colors.grey[9]}`};
        padding-bottom: 8px;    
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    title: styled.div`
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `,
    id: styled.span`
        margin-right: 4px;
        font-weight: 700;
        background-color: ${({ theme }) => theme.colors.grey[0]};
        border-radius: 8px;
        padding: 0 8px;
    `,
    body: styled.div`
        text-align: justify;
        overflow: hidden; 
    `
};

export default S;
