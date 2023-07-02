import { useLocalStorage, useHotkeys } from "@mantine/hooks";
import { StoreProvider } from "easy-peasy";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import store from "../src/store/index";
import React from "react";
import App from "./App";
import "./index.css";

function MyApp() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          components: {
            Input: {
              styles: (theme) => ({
                input: { borderColor: "black" },
                required: { display: "hidden" },
              }),
            },
          },
        }}
      >
        <React.StrictMode>
          <StoreProvider store={store}>
            <App />
          </StoreProvider>
        </React.StrictMode>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<MyApp />);
reportWebVitals();
