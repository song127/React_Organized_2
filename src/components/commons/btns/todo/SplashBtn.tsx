// import React, { useEffect, useRef, useState } from "react";

// import { css } from "@emotion/react";
// import styled from "@emotion/styled";

// const Container = styled.button`
//   position: relative;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;

//   width: 100%;
//   height: 100%;

//   overflow: hidden;

//   ${({ disabled, backColor, textColor, fontSize, round }) => css`
//     cursor: ${!disabled ? "pointer" : "none"};
//     background-color: ${backColor};
//     color: ${textColor};
//     font-size: ${fontSize}px;
//     border-radius: ${round}px;
//   `}

//   &::after {
//     content: "";
//     position: absolute;
//     top: ${({ mouseData }) => mouseData.y}px;
//     left: ${({ mouseData }) => mouseData.x}px;
//     width: 0;
//     height: 0;
//     border-radius: 100%;
//     opacity: 1;
//     background-color: rgba(255, 255, 255, 0.5);
//     transform: translate(-50%, -50%);
//     transition: all 0.3s ease;
//   }

//   &:active::after {
//     width: 100%;
//     height: calc(100%);
//   }
// `;
// function SplashBtn({
//   children = "Button",
//   onClick = () => {},
//   active = true,
//   backColor = "black",
//   textColor = "white",
//   fontSize = 16,
//   round = 0,
// }) {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     ref.current.addEventListener("mousemove", (e) => {
//       setX(e.offsetX);
//       setY(e.offsetY);
//       console.log(e.offsetX, e.offsetY);
//     });
//   }, []);

//   return (
//     <Container
//       ref={ref}
//       onClick={onClick}
//       disabled={!active}
//       backColor={backColor}
//       textColor={textColor}
//       fontSize={fontSize}
//       round={round}
//       mouseData={{ x, y }}>
//       {children}
//     </Container>
//   );
// }

// export default SplashBtn;
