import Expandable from "./components/Expandable"
import Header from "./components/Header"


function App() {
  

  return (
   <>
     <div className="bg-gray-800 text-red-300 p-4">
      <h1 className="text-2xl">Hello, Tailwind CSS!</h1>
    </div>
    <Expandable>
      <Header/>
       
    </Expandable>
    </>
  )
}

export default App
