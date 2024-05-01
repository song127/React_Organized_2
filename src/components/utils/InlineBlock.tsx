function InlineBlock({ w = 0, h = 0, ...props }) {
  return (
    <div
      style={{
        display: "inline-block",
        marginRight: `${typeof w === "number" ? `${w}px` : w}`,
        marginTop: `${typeof h === "number" ? `${h}px` : h}`,
      }}
    >
      {props.children}
    </div>
  );
}

export default InlineBlock;
