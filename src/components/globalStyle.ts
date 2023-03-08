import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${({ theme }) => theme.colors.grey[9]};
    }

    ::-webkit-scrollbar {
        height: 12px;
        width: 12px;
        background: ${({ theme }) => theme.colors.grey[0]};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.grey[9]};
        -webkit-border-radius: 8px;
    }
`;
