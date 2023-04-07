// import {useSelector} from 'react-redux';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { changeBackground } from "../theme/ChangecolorSlice";

function Changecolor() {
    // const count = useSelector((state) => state.counter.value)
const [color, setColor] = useState("")
const dispatch = useDispatch()

  return (
    <div>

{/* <span>Color: {count}</span> */}

<input className='textbox' type='text' onChange={(e) => setColor(e.target.value)}/>
<button className='button' onClick={() => { dispatch(changeBackground(color))}}>Change Color</button>
{/* <h2>{color}</h2> */}
    </div>
  )
}

export default Changecolor