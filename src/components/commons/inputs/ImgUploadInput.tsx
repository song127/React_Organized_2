import { useRef, useState } from "react";

import styled from "@emotion/styled";

import COLORS from "@/styles/global/globalColor";

const Container = styled.div`
  cursor: pointer;
  width: 160px;
  height: 160px;

  background-color: ${COLORS.simple_gray_2.withOpacity(0.5)};
  border: 1px solid ${COLORS.gray_2};
  border-radius: 10px;
`;

const ImageView = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

function ImgUploadInput() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgPreview, setImgPreview] = useState<string>();
  const [imgFile, setImgFile] = useState(null);

  const imgRefController = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const encodeFileToBase64 = (fileBlob: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      reader.onerror = (error) => reject(error);
      reader.onload = () => resolve(reader.result);
    });
  };

  const fileOnChange = async (e: any) => {
    const file = e.target.files[0];
    setImgFile(file);
    const encodedFile = await encodeFileToBase64(file);
    setImgPreview(encodedFile as string);
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
