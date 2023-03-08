import React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "../theme/theme";
import S from "./app.styled";
import { GlobalStyle } from "./globalStyle";
import StatefulComponentState from "./stateful/componentState/StatefulComponentState";

const App: React.FC = () => (
    <ThemeProvider theme={baseTheme}>
        <GlobalStyle />
        <S.container>
            <StatefulComponentState />
            <StatefulComponentState />
        </S.container>
    </ThemeProvider>
);

export default App;
