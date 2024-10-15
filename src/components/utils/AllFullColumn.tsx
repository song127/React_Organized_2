import { LayerAlign } from "@/utils/widget/LayerAlign";

export default function AllFullColumn({
  main = LayerAlign.start,
  cross = LayerAlign.start,
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
        width: "100%",
        height: "100%",
        flexWrap: wrap ? "wrap" : "nowrap",
        gap,
      }}
      {...props}>
      {props.children}
    </div>
  );
}
