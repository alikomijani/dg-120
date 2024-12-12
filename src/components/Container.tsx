import { PropsWithChildren } from "react";
type Props = {
  className?: string;
  size: "xl" | "lg";
} & PropsWithChildren;

function Container({ children, className }: Props) {
  return <div className="w-[1440px] mx-auto">{children}</div>;
}

export default Container;
