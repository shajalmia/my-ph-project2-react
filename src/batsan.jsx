import { useState } from "react"

export default function Batsman(){

    const [runs,setRuns]=useState(0);
    const [sixes,setSixes]=useState(0);
    const [fours,setFours]=useState(0);

    const addSingles=()=>{
        const updateRuns=runs+1;
        setRuns(updateRuns);
    }

    const addFours=()=>{
        const updateRuns=runs+4;
        
            const updateFours=fours+1;
            setFours(updateFours);

        
        setRuns(updateRuns);
    }

    const addSix=()=>{


        const updateRuns=runs+6;

        const updateSixes=sixes+1;
        setSixes(updateSixes);
        setRuns(updateRuns);
    }





    const addStyles='border 2px solid red'
    return(
        <div styles={addStyles}>
            {
                runs>50 && <p>Your Scored:50</p>
            }
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six:{sixes}</small></p>
            <p><small>Four:{fours}</small></p>
            <h3>Runs:{runs}</h3>
            <button onClick={addSingles}>Singles</button>
            <button onClick={addFours}>Four</button>
            <button onClick={addSix}>Six</button>
        </div>
    )

}