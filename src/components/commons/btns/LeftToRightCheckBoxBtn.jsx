import styled from "@emotion/styled";
import Block from "components/utils/Block";
import { useState } from "react";
import { ReactComponent as Check } from "assets/icons/ic-round_check.svg";
import { css } from "@emotion/react";

const Container = styled.div`
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: max-content;
    height: max-content;

    color: black;
`;

const BoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;

    width: 25px; // should be odd number because of the border padding
    height: 25px;

    border-radius: 3px;
    border: 1px solid black;
`;

const IconWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;

    width: 0;
    height: 100%;

    overflow-x: hidden;

    transition: all 0.2s linear;

    ${({ isCheck }) => css`
        ${isCheck &&
        css`
            width: 100%;
            transform-origin: left;
        `}
    `}
`;

const CheckIcon = styled(Check)`
    position: absolute;

    width: 18px;
    height: 18px;

    left: 3px;
    top: 3px;
`;

function LeftToRightCheckBoxBtn({ index, currentIndex, setIndex, children }) {
    const [isCheck, setIsCheck] = useState(false);

    return (
        <Container onClick={() => setIsCheck(!isCheck)}>
            <BoxContainer>
                <IconWrapper isCheck={isCheck}>
                    <CheckIcon />
                </IconWrapper>
            </BoxContainer>
            <Block w={4} />
            {children}
        </Container>
    );
}

export default LeftToRightCheckBoxBtn;
