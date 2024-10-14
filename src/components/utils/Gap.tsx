import { pxToRem } from "@/utils/helper";

export default function Gap({ w = 0, h = 0, ...props }) {
  return (
    <div
      style={{
        display: "flex",
        marginRight: `${typeof w === "number" ? pxToRem(`${w}px`) : w}`,
        marginTop: `${typeof h === "number" ? pxToRem(`${h}px`) : h}`,
      }}>
      {props.children}
    </div>
  );
}
