import DrumPad from "./Components/DrumPad";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
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

  // const drumPads = [
  //   { id: "pad1", triggerKey: "Q", src: "path/to/audio1.mp3" },
  //   { id: "pad2", triggerKey: "W", src: "path/to/audio2.mp3" },
  //   { id: "pad3", triggerKey: "E", src: "path/to/audio3.mp3" },
  //   { id: "pad4", triggerKey: "A", src: "path/to/audio4.mp3" },
  //   { id: "pad5", triggerKey: "S", src: "path/to/audio5.mp3" },
  //   { id: "pad6", triggerKey: "D", src: "path/to/audio6.mp3" },
  //   { id: "pad7", triggerKey: "Z", src: "path/to/audio7.mp3" },
  //   { id: "pad8", triggerKey: "X", src: "path/to/audio8.mp3" },
  //   { id: "pad9", triggerKey: "C", src: "path/to/audio9.mp3" },
  // ];

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
        <div id="drum-machine" className="text-white ">
          <div id="display">{activeKey}</div>
          <div className="grid grid-rows-3 grid-flow-col gap-4 border-4 border-white rounded-lg p-6 shadow-xl shadow-orange-500">
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
