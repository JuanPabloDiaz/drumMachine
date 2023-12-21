import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <div className="w-screen h-screen flex justify-center items-center text-white">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div className="grid grid-row-subgrid row-span-3">
              <div className="row-start-2">06</div>
            </div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
