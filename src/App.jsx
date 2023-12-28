import DrumPad from "./Components/DrumPad.jsx";
import Layout from "./Components/Layout/index.jsx";
import { useEffect, useState } from "react";
import { FaDrum } from "react-icons/fa";

import "./App.css";

function App() {
  const [activeKey, setActiveKey] = useState("");

  // enable keyboard input for drum pads
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playSound(e.key.toUpperCase());
      // console.log("key: ", e.key);
    });
  }, []);

  const drumPads = [
    {
      triggerKey: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      triggerKey: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      triggerKey: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      triggerKey: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      triggerKey: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      triggerKey: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      triggerKey: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      triggerKey: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      triggerKey: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    // console.log("audio: ", audio);
    audio.play();

    setActiveKey(selector);
  }

  return (
    <>
      <Layout>
        <div
          id="drum-machine"
          className=" bg-[#4C4B51] border-2 border-black rounded-lg p-6 shadow-md shadow-[#4C4B51]"
        >
          <div className="fixed flex justify-center items-center gap-3 top-20 p-2 text-sky-500">
            <FaDrum className="h-8 w-8" />
            <h1 className="text-3xl font-bold mb-4">BeatBoxify</h1>
            <FaDrum className="h-8 w-8" />
          </div>
          <div
            id="display"
            className="flex justify-center h-10 w-60 p-2 m-2 rounded-lg bg-[#08080A] text-white"
          >
            {activeKey}
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-4 ">
            {drumPads.map((drum) => (
              <DrumPad
                key={drum.src}
                id={drum.src}
                className="drum-pad"
                triggerKey={drum.triggerKey}
                onClick={() => playSound(drum.triggerKey)}
                src={drum.src}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
