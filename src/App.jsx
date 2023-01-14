import React from "react"
import ReactDOM from "react-dom/client"
import MainContent from "./assets/MainContent"


function App(){
  return(
    <div>
      <MainContent/>
      
    </div>
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
