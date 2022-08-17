import BG from "./assets/bg.png"
function App() {
  return (
    <div className="h-screen w-[100vw] relative">
      <img src={BG} alt="" className="fixed w-full -z-10 bottom-0 left-0 right-0" />
      <div className="flex w-full h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">TEST IPFS FLEEK</h1>
      </div>
    </div>
  );
}

export default App;
