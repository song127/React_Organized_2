import { LayerAlign } from "@/utils/widget/LayerAlign";

interface AlignProps {
  isAbsolute?: boolean;
  margin?: number | string;
  alignment?: LayerAlign;
  children: React.ReactNode;
}

export default function Align({
  isAbsolute = false,
  margin = 0,
  alignment = LayerAlign.start,
  ...props
}: AlignProps) {
  return (
    <div
      style={{
        position: isAbsolute ? "absolute" : "relative",
        display: "flex",
        width: "max-content",
        height: "max-content",
        margin: margin,
        alignSelf: alignment,
      }}>
      {props.children}
    </div>
  );
}
