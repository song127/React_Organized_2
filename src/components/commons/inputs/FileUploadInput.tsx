import { useRef } from "react";

import styled from "@emotion/styled";

import COLORS from "@/styles/global/globalColor";
// import { ReactComponent as InactiveCircle } from "assets/icons/ic-inactive_circle_plus.svg";
// import { ReactComponent as ActiveCircle } from "assets/icons/ic-active_circle_plus.svg";

const Container = styled.button`
  cursor: pointer;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${COLORS.gray_1.withOpacity(0.5)};

  width: 316px;
  height: 210px;

  border-radius: 10px;
`;

// const InactiveCircleIcon = styled(InactiveCircle)`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// `;

// const ActiveCircleIcon = styled(ActiveCircle)`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// `;

interface FileUploadInputProps {
  file: string;
  setFile: (file: string) => void;
  back: string;
}

function FileUploadInput({ file, setFile, back }: FileUploadInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: any) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0].name);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Container
      style={{ backgroundImage: (file ? `url(${back})` : null) as any, backgroundSize: "cover" }}
      onClick={handleClick}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {/* {file ? <InactiveCircleIcon /> : <ActiveCircleIcon />} */}
      {/* {file && <FileName style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", fontSize: "24px"}}>{file}</FileName>} */}
    </Container>
  );
}

export default FileUploadInput;
