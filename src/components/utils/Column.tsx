import { LayerAlign } from "@/utils/widget/LayerAlign";

export default function Column({
  main = LayerAlign.center,
  cross = LayerAlign.center,
  fullWidth = false,
  fullHeight = false,
  flex = "",
  wrap = false,
  gap = 0,
  ...props
}) {
  return (
    <div
      style={{
        display: "flex",
        flex,
        flexDirection: "column",
        justifyContent: main,
        alignItems: cross,
        width: fullWidth ? "100%" : "max-content",
        height: fullHeight ? "100%" : "max-content",
        flexWrap: wrap ? "wrap" : "nowrap",
        gap,
      }}>
      {props.children}
    </div>
  );
}
