import { PropsWithChildren } from "react";
import { cn } from "../utils";
type Props = {
  className?: string;
  size?: "xl" | "lg";
} & PropsWithChildren;

function Container({ children, className, size = "xl" }: Props) {
  return (
    <div
      className={cn(
        "mx-auto",
        { "w-[1440px] ": size === "xl" },
        { "w-[1200px] ": size === "lg" },
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
