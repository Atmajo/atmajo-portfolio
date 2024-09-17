import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <main className={cn("px-10 md:px-20", className)}>{children}</main>;
};

export default MaxWidthWrapper;
