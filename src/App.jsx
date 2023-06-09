import Canvas from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";

function App() {

  return (
    <>
    <main className="app transition-all ease-in">
        <h1 className="head-text"></h1>
        <Home />
        <Canvas />
        <Customizer />
    </main>
     
    </>
  )
}

export default App
