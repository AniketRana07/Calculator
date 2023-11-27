import React, { useState } from "react"
import Button from "./components/button"
import "./App.css"

function App() {

  const [result, setResult] = useState("")

  const arr = ["%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "="]

  const onButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result))
      } catch (error) {
        setResult("Error")
      }
      return
    }

    setResult((prevResult) => prevResult + value)

  }

  return (
    <>
      <div className="display">
        <input type="text" value={result === "" ? 0 : result} onChange={(e) => setResult(e.target.value)} />
      </div>

      <div className="calculator">

        <Button value="AC" className="btns" callback={() => setResult("")} />

        <Button value="DEL" className="btns" callback={() => setResult(result.slice(0, -1))} />

        {arr.map((item, i) => (
          <Button className="btns" key={i} value={item} callback={(value) => onButtonClick(value)} />
        ))}

      </div>
    </>
  )
}

export default App
