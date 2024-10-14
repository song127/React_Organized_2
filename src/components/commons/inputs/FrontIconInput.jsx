import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";

const Backboard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: ${COLORS.gray_4};

    border-radius: 50px;
`;

const Input = styled.input`
    border-radius: 50px;

    width: 100%;
    height: 100%;

    padding: 0 16px 0 12px;

    color: ${COLORS.dark_1};

    &::placeholder {
        color: ${COLORS.gray_1};
    }
`;
function FrontIconInput({
    type = "text",
    value,
    setValue,
    onSearch = () => {},
    iconComponent,
    placeholder = "Basic Icon Input",
}) {
    return (
        <Backboard>
            <button onClick={onSearch} style={{ marginLeft: 16 }}>
                {iconComponent}
            </button>
            <Input
                value={value}
                type={type}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
            />
        </Backboard>
    );
}

export default FrontIconInput;
