"use client";

import { ReactNode } from "react";
import { CONSTANT } from '@/config/constant'

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children} {CONSTANT}
    </button>
  );
};
