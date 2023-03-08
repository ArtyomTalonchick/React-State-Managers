import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const S = {
    backdrop: styled.div`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.colors.grey[0]};
        opacity: .5;
    `,
    loaderContainer: styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
    loader: styled.div`
        border: ${({ theme }) => `4px solid ${theme.colors.grey[0]}`};
        border-top: ${({ theme }) => `4px solid ${theme.colors.grey[9]}`};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: ${spin} 1s linear infinite;
    `,
};

export default S;