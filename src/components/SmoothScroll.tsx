"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "@studio-freight/react-lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <Lenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children as any}
    </Lenis>
  );
}
