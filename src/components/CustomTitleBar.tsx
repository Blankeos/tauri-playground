// Custom Window https://tauri.app/v1/guides/features/window-customization/
import { appWindow } from "@tauri-apps/api/window";
import hasLoadedCSR from "@/utils/hasLoadedCSR";

const CustomTitleBar = () => {
  const hasLoaded = hasLoadedCSR();

  if (typeof window === "undefined") return <></>;
  if (!hasLoaded) return <></>;
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

export default CustomTitleBar;
