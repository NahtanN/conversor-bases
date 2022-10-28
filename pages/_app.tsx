import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <NotificationsProvider position="top-center" limit={2}>
        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
  );
}
