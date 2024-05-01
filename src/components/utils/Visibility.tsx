export default function Visibility({ visible = false, ...props }) {
  return visible ? props.children : null;
}
