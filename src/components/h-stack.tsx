import { cn } from "@/lib/cn";
import type React from "react";

type Props = React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

export default function HStack({ className, ...props }: Props) {
  return <div {...props} className={cn("flex", className)} />;
}
