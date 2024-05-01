import LayerAlign from "@utils/widget/LayerAlign";

export default function Align({
  margin = 0,
  alignment = LayerAlign.start,
  ...props
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "max-content",
        height: "max-content",
        margin: margin,
        alignSelf: alignment,
      }}
    >
      {props.children}
    </div>
  );
}
