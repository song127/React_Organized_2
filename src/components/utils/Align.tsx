import { LayerAlign } from "@/utils/widget/LayerAlign";

interface AlignProps {
  margin?: number | string;
  alignment?: LayerAlign;
  children: React.ReactNode;
}

export default function Align({ margin = 0, alignment = LayerAlign.start, ...props }: AlignProps) {
  return (
    <div
      style={{
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
