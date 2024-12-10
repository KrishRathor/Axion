import { TipTapEditor } from "./components/editor/TipTapEditor";

function App() {
  return (
    <div className="h-fit min-h-[100vh] bg-[#18181B] text-white" >
      <div>
        <h1 className="text-red-500 text-2xl" >Tip Tap Editor in React</h1>
        <div className="text-white" >
          <TipTapEditor />
        </div>
      </div>
    </div>
  );
}

export default App;
