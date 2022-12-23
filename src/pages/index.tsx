import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import reactLogo from "../assets/react.svg";
import tauriLogo from "../assets/tauri.svg";
import nextLogo from "../assets/next.svg";
import MyComponent from "components/MyComponent";
import DynamicCustomTitleBar from "@/components/DynamicCustomTitleBar";

import { getTauriVersion } from "@tauri-apps/api/app";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  // Sum
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sumMsg, setSumMsg] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  async function sumInvoke() {
    console.log("Invoking sum");
    setSumMsg(
      await invoke("my_sum", { num1: parseInt(num1), num2: parseInt(num2) })
    );
  }

  const func = async () => {
    const res = await getTauriVersion();
    return res;
  };

  useEffect(() => {
    func().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="container">
      <DynamicCustomTitleBar />
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <span className="logos">
          <a href="https://nextjs.org" target="_blank">
            <Image
              width={144}
              height={144}
              src={nextLogo}
              className="logo next"
              alt="Next logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://tauri.app" target="_blank">
            <Image
              width={144}
              height={144}
              src={tauriLogo}
              className="logo tauri"
              alt="Tauri logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://reactjs.org" target="_blank">
            <Image
              width={144}
              height={144}
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
        </span>
      </div>

      <p>Click on the Tauri, Next, and React logos to learn more.</p>

      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="button" onClick={() => greet()}>
            Greet
          </button>
        </div>
        <div>
          <input
            id="greet-input"
            onChange={(e) => {
              setNum1(e.currentTarget.value);
            }}
          />
          <input
            id="greet-input"
            onChange={(e) => {
              setNum2(e.currentTarget.value);
            }}
          />
          <button type="button" onClick={() => sumInvoke()}>
            Sum
          </button>
          <p>{sumMsg}s</p>
        </div>
      </div>
      <MyComponent />

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
