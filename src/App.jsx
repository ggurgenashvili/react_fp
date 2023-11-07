import Random from "./Random"
import "./index.css"
import key from "./key.jpg"
import { useState, useEffect } from "react"

const App = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    setIsVisible((current) => !current)
    let i = 0
    if (i === 0) {
      i = 1
      let elem = document.getElementById("myBar")
      let width = 1
      let id = setInterval(frame, 50)
      function frame() {
        if (width >= 100) {
          clearInterval(id)
          i = 0
        } else {
          width++
          elem.style.width = width + ""
        }
      }
    }
  }
  return (
    <div>
      <div style={{ visibility: isVisible ? "visible" : "hidden" }}>
        <div
          id='loading'
          className='border-4 border-gray-600 flex flex-col justify-center items-center h-[200px] w-[400px] m-auto mt-10 rounded-3xl p-[50px]'
        >
          <h1>Making Everything OK in progress</h1>
          <div id='myProgress' className='w-[100%] bg-[#ddd] mt-5'>
            <div id='myBar' className='w-[1%] h-[30px] bg-[#04AA6D] '></div>
          </div>
        </div>
      </div>
      <div className='bg-black w-[390px] h-[80px] flex justify-center items-center m-auto '>
        <div
          id='key1'
          className='flex justify-center h-[100vh] active:w-[380px] active:h-[70px]'
        >
          <button onClick={handleClick}>
            <img src={key} alt='Make' />
          </button>
        </div>
      </div>
    </div>
  )
}
export default App
