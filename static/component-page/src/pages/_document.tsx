import { Head, Html, Main, NextScript } from "next/document";
import { type CSSProperties, useMemo } from "react";

import { getColors } from "@/lib/data";

export default function Document() {
  const style = useMemo(() => {
    const cssVariables: Record<string, unknown> = {};
    const colors = getColors();

    for (const [key, value] of Object.entries(colors)) {
      cssVariables[`--${key}`] = value;
    }

    return cssVariables as CSSProperties;
  }, []);

  return (
    <Html lang="en" style={style}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
