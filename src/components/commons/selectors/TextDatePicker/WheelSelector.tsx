// import { useState } from "react";

// import { css } from "@emotion/react";
// import styled from "@emotion/styled";

// import COLORS from "@/styles/global/globalColor";

// interface WheelSelectorProps {
//   selected: number;
//   type: string;
//   data: string[];
//   onDateChange: (type: string, value: number) => void;
// }

// function WheelSelector({ selected, type, data, onDateChange }: WheelSelectorProps) {
//   const [position, setPosition] = useState(selected ? -(selected - 1) * 50 : 0);
//   const [offset, setOffset] = useState(0);
//   const [dragging, setDragging] = useState(false);
//   const [previousY, setPreviousY] = useState(0);

//   const onMouseDown = (event: React.TouchEvent<HTMLDivElement>) => {
//     setPreviousY(event.touches ? event.touches[0].clientY : event.clientY);
//     setDragging(true);

//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//     document.addEventListener("touchmove", onMouseMove);
//     document.addEventListener("touchend", onMouseUp);
//   };

//   const onMouseMove = (event: TouchEvent) => {
//     const clientY = event.touches ? event.touches[0].clientY : event.clientY;

//     setOffset(clientY - previousY);

//     const maxPosition = -data.length * 50;
//     // const position = position + offset;
//     const position = position + offset;

//     setPosition(Math.max(maxPosition, Math.min(50, position)));

//     setPreviousY(event.touches ? event.touches[0].clientY : event.clientY);
//   };

//   const onMouseUp = () => {
//     const maxPosition = -(data.length - 1) * 50;
//     const roundedPosition = Math.round((position + offset * 5) / 50) * 50;
//     const finalPosition = Math.max(maxPosition, Math.min(0, roundedPosition));

//     setDragging(false);
//     setPosition(finalPosition);

//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseup", onMouseUp);
//     document.removeEventListener("touchmove", onMouseMove);
//     document.removeEventListener("touchend", onMouseUp);

//     onDateChange(type, -finalPosition / 50);
//   };
// }

// export default WheelSelector;

// const Wheel = styled.div<{ selected: boolean }>`
//   position: relative;
//   height: 50px;
//   margin: 0;

//   border-top: 1px solid ${COLORS.blue_12};
//   border-bottom: 1px solid ${COLORS.blue_12};

//   font-size: 16px;

//   &:before,
//   &:after {
//     content: "";
//     pointer-events: none;
//     z-index: 1;

//     position: absolute;
//     left: 0;

//     width: 80px;
//     height: 50px;

//     background-color: ${COLORS.white};
//     opacity: 0.6;
//   }

//   &:before {
//     top: -51px; // 1px border
//   }

//   &:after {
//     bottom: -51px; // 1px border
//   }

//   li {
//     cursor: pointer;

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     width: 80px;
//     height: 50px;

//     user-select: none;

//     ${({ selected }) =>
//       selected &&
//       css`
//         color: ${COLORS.blue_12};
//         font-size: 17px;
//       `}
//   }
// `;

// TODO
export {};
