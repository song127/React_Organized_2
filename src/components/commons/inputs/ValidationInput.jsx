import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Block from "components/utils/Block";
import { STATE } from "components/utils/WidgetUtils";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "styles/global/globalColors";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    background-color: transparent;

    transition: all 0.2s ease-in-out;
`;

const Backboard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${COLORS.gray_4};

    box-sizing: border-box;

    transition: all 0.2s ease-in-out;

    ${({ w, h, borderOn, thickness, round, state }) => css`
        width: ${w};
        height: ${h};

        border: ${thickness} solid transparent;
        border-radius: ${round};

        ${borderOn &&
        css`
            border: ${thickness} solid ${border_color[state]};
        `}
    `}
`;

const Input = styled.input`
    border-radius: 50px;

    width: 100%;
    height: 100%;

    padding: 0 16px;

    color: ${COLORS.dark_1};

    &::placeholder {
        color: ${COLORS.gray_1};
    }
`;

const Message = styled.p`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;

    ${({ round, state }) => css`
        margin-left: ${round};
        color: ${border_color[state]};
    `}
`;

const border_color = {
    [STATE.DEFAULT]: COLORS.blue_1,
    [STATE.SUCCESS]: COLORS.green_1,
    [STATE.WARNING]: COLORS.yellow_4,
    [STATE.ERROR]: COLORS.red_1,
};

function ValidationInput({
    type = "text",
    width,
    height,
    value,
    setValue,
    onChange = () => {
        return STATE.DEFAULT;
    },
    placeholder = "Basic Input",
    round = "12px",
    thickness = "2px",
}) {
    const [borderOn, setBorderOn] = useState(false);
    const [state, setState] = useState(STATE.DEFAULT);
    const [validText, setValidText] = useState("");
    const ref = useRef(null);

    const onChangeHandler = (e) => {
        const [newState, newValidText] = onChange(e.target.value);
        setState(newState);
        setValidText(newValidText);
        setValue(e.target.value);
    };

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setBorderOn(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
        <Wrapper>
            <Backboard
                ref={ref}
                w={width}
                h={height}
                borderOn={borderOn}
                state={state}
                round={round}
                thickness={thickness}>
                <Input
                    ref={ref}
                    value={value}
                    type={type}
                    onChange={onChangeHandler}
                    placeholder={placeholder}
                    onFocus={() => setBorderOn(true)}
                />
            </Backboard>

            <Block h={5} />
            {validText === "" ? (
                <br />
            ) : (
                <Message state={state}>{validText}</Message>
            )}
        </Wrapper>
    );
}

export default ValidationInput;
