import type { AppProps } from "next/app";
import { useMemo } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "components/globalstyles";
import { getSeason } from "utils/season";

export default function App({ Component, pageProps }: AppProps) {
  const theme = useMemo(() => getSeason(), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
