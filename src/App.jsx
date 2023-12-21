import "./App.css";
import DrumPad from "./Components/DrumPad";
import Layout from "./components/Layout";

function App() {
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
      id: "1",
      keyCode: 81,
      triggerKey: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "2",
      keyCode: 87,
      triggerKey: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "3",
      keyCode: 69,
      triggerKey: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "4",
      keyCode: 65,
      triggerKey: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "5",
      keyCode: 83,
      triggerKey: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "6",
      keyCode: 68,
      triggerKey: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "7",
      keyCode: 90,
      triggerKey: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "8",
      keyCode: 88,
      triggerKey: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "9",
      keyCode: 67,
      triggerKey: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <>
      <Layout>
        <div id="drum-machine" className=" triggerKey-white">
          <div
            id="display"
            className="grid grid-rows-3 grid-flow-col gap-4 border-4 border-white rounded-lg p-6 shadow-xl shadow-orange-500"
          >
            {drumPads.map((pad) => (
              <DrumPad
                key={pad.id}
                id={pad.id}
                triggerKey={pad.triggerKey}
                onClick={() => console.log(pad.id)}
                src={pad.src}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
