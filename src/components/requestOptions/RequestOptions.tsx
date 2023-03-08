import React, { useEffect, useState } from "react";
import C from "../../styledComponents";
import S from "./RequestOptions.styled";


export interface RequestOptionsPropsType {
    delay: number;
    throwError: boolean;
    onChangeDelay: (value: number) => void;
    onChangeThrowError: (value: boolean) => void;
}


const RequestOptions: React.FC<RequestOptionsPropsType> = ({
    delay,
    throwError,
    onChangeDelay,
    onChangeThrowError,
}) => {
    const [tempDelay, setTempDelay] = useState(delay);

    useEffect(() => {
        setTempDelay(delay)
    }, [delay]);

    const handleChangeDelay = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = +event.target.value;
        if (!Number.isNaN(value) && value >= 0) {
            setTempDelay(value);
        }
    };

    const handleSaveDelay = () => {
        onChangeDelay(tempDelay);
    };

    const handleChangeThrowError = () => {
        onChangeThrowError(!throwError);
    };

    return (
        <S.container>
            <C.field>
                <C.fieldTitle>
                    Delay
                </C.fieldTitle>
                <C.input type="text" value={tempDelay} onChange={handleChangeDelay} />
                <C.button onClick={handleSaveDelay} disabled={delay === tempDelay}>
                    Ok
                </C.button>
            </C.field>
            <C.field>
                <C.fieldTitle>
                    Throw Error
                </C.fieldTitle>
                <C.input type="checkbox" checked={throwError} onChange={handleChangeThrowError} />
            </C.field>
        </S.container>
    );
};

export default RequestOptions;
