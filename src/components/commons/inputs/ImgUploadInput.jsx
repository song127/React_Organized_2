import { useRef, useState } from "react";
import { COLORS } from "styles/global/globalColors";

const Container = styled.div`
    cursor: pointer;
    width: 160px;
    height: 160px;

    background-color: ${COLORS.simple_gray_op_1};
    border: 1px solid ${COLORS.gray_2};
    border-radius: 10px;
`;

const ImageView = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

function ImgUploadInput() {
    const fileRef = useRef();
    const [imgPreview, setImgPreview] = useState(null);
    const [imgFile, setImgFile] = useState(null);

    const imgRefController = () => {
        fileRef.current.click();
    };

    const encodeFileToBase64 = (fileBlob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(fileBlob);
            reader.onerror = (error) => reject(error);
            reader.onload = () => resolve(reader.result);
        });
    };

    const fileOnChange = async (e) => {
        const file = e.target.files[0];
        setImgFile(file);
        const encodedFile = await encodeFileToBase64(file);
        setImgPreview(encodedFile);
    };

    return (
        <Container onClick={imgRefController}>
            {imgPreview && <ImageView src={imgPreview} />}
            <input
                ref={fileRef}
                type={"image"}
                name="imgFileInput"
                onChange={fileOnChange}
                style={{ display: "none" }}
            />
        </Container>
    );
}

export default ImgUploadInput;
