import type React from "react";
import { cn } from "@/lib/cn";

type Props = React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

export default function VStack({ className, ...props }: Props) {
  return <div {...props} className={cn("flex flex-col", className)} />;
}
