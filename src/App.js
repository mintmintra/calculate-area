import { useState } from "react";

export default function App(){
  const [radius, setRadius] = useState("");

  const [radiusResult, setRadiusResult] = useState(0);

  function calculateRadius(event){
    let circle = Number(Math.PI * radius * radius).toFixed(2);
    setRadiusResult(circle);
    event.preventDefault();
    setRadius("")

  }
  return(
    <div>
      <form>
        <input type="text" placeholder="enter radius" value={radius} onChange={(e) => setRadius(e.target.value)} />
        <input type="submit" value="Calculate" onClick={calculateRadius} />
        <div>
          <p>Area of circle : {radiusResult}</p>
        </div>
      </form>
    </div>
  )
}