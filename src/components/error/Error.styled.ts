import styled from "styled-components";

const S = {
    container: styled.div`
        background-color: ${({ theme }) => theme.colors.grey[0]};
        color: ${({ theme }) => theme.colors.error};
        padding: 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: fit-content;
        align-self: center;
    `,
};

export default S;