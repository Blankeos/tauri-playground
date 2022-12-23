import type { AppProps } from "next/app";

import "../style.css";

// Custom Window https://tauri.app/v1/guides/features/window-customization/
import { appWindow } from "@tauri-apps/api/window";

const CustomTitleBar = () => {
  return (
    <>
      <div data-tauri-drag-region className="titlebar">
        <button
          className="titlebar-button"
          id="titlebar-minimize"
          onClick={() => {
            console.log("Clicked");
            appWindow.minimize();
          }}
        >
          <img
            src="https://api.iconify.design/mdi:window-minimize.svg"
            alt="minimize"
          />
        </button>
        <button
          className="titlebar-button"
          id="titlebar-maximize"
          onClick={() => appWindow.toggleMaximize()}
        >
          <img
            src="https://api.iconify.design/mdi:window-maximize.svg"
            alt="maximize"
          />
        </button>
        <button className="titlebar-button" id="titlebar-close">
          <img
            src="https://api.iconify.design/mdi:close.svg"
            alt="close"
            onClick={() => appWindow.close()}
          />
        </button>
      </div>
    </>
  );
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomTitleBar />
      <Component {...pageProps} />
    </>
  );
}
