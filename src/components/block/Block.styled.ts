import styled from "styled-components";

const S = {
    container: styled.div`
        position: relative;
        display: flex;
        align-items: stretch    ;
        border: ${({ theme }) => `1px solid ${theme.colors.grey[1]}`};
        padding: 8px 16px;
        border-radius: 8px;
        height: 240px;
    `,
    toolbar: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 16px;
    `,
    title: styled.div`
        font-size: 20px;
        font-weight: 500;
        font-style: italic;
    `,
};

export default S;
