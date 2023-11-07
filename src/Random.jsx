import { useState, useEffect } from "react"

import LinearProgress from "@mui/material/LinearProgress"

const Random = () => {
  const [level, setLevel] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setLevel((newLevel) => (newLevel >= 100 ? 0 : newLevel + 10))
    }, 500)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className='mt-6' >
      <LinearProgress id="myBar" variant='buffer' value={level} style={{ width: 200 }} />
    </div>
  )
}
export default Random
