import dynamic from "next/dynamic";

const DynamicCustomTitleBar = dynamic(() => import("./CustomTitleBar"), {
  ssr: false,
});

export default DynamicCustomTitleBar;
