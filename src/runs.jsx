import { useState } from "react"

export default function Batsman(){

    const [runs,setRuns]= useState(0);
    const [fours,setFours]= useState(0);
    const [sixes,setSixes]= useState(0);

    const addSingles=()=>{
        const updatedRuns=runs+1;
        setRuns(updatedRuns);
    }

    const addFours = ()=>{
        const updatedRuns=runs+4;
        setRuns(updatedRuns);
        const updatedFours=fours+1;
        setFours(updatedFours);



    }

    const addSixes =()=>{
        const updatedRuns=runs+6;
        setRuns(updatedRuns);
        const updatedSixes =sixes+1;
        setSixes(updatedSixes);
    }





    const batsmanStyle={
        border:'3px solid green',
        marginTop:'10px'

    }
    return(
        <div  style={batsmanStyle}>

            {
                runs>=50&& <h3>YouScored:50</h3>
            }

            <h4>Sixes: {sixes}</h4>
            <h4>Fours: {fours}</h4>
            <h3>Scores: {runs}</h3>
            <button onClick={addSingles}>Single</button>
            <button onClick={addFours}>Four</button>
            <button onClick={addSixes}>Six</button>
        </div>
    )
}