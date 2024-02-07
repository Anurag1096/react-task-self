import ExpandBody from "./components/Body"
import Expandable from "./components/Expandable"
import Header from "./components/Header"


function App() {
  

  return (
   <>
     <div className="bg-gray-800 text-red-300 p-4">
      <h1 className="text-xl text-green-950">Hello, Tailwi CSS!</h1>
    </div>
    <Expandable>
      <Header/>
       <ExpandBody>"this is the text"</ExpandBody>
    </Expandable>
    </>
  )
}

export default App
