import React from "react";
import S from "./Error.styled";

interface PropsType {
    text: string;
}

const Error: React.FC<PropsType> = ({ text }) => (
    <S.container>
        {text}
    </S.container>
);

export default Error;
