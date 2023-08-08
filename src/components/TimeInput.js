import React, {useState} from "react"


function TimeInput(){

   const [maxTime, setMaxTime] = useState("0")

   function handleSubmit(e){
      e.preventDefault()
      console.log(e.target.value)
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <label>Enter time Value</label>
            <input type="number" name="time" onChange={(e)=>setMaxTime(e.target.value)}></input>
            <input type="submit" value="Submit" />
         </form>

      </div>
      
   )
}

export default TimeInput