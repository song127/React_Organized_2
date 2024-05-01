export default function SizedBox({
  w = "max-content",
  h = "max-content",
  flex = "",
  ...props
}) {
  let width;
  if (typeof w === "number") {
    width = `${w}px`;
  } else {
    width = w;
  }
  let height;
  if (typeof h === "number") {
    height = `${h}px`;
  } else {
    height = h;
  }

  return (
    <div
      style={{ display: "flex", width: `${width}`, height: `${height}`, flex }}
    >
      {props.children}
    </div>
  );
}
