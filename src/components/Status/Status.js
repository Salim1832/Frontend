import { useEffect, useState } from "react";
import Global from "../Global/Global";
import GlobalSection from "../GlobalSection/GlobalSection";

function Status(props) {
    const {} = props;
    const [globals, setGlobals] = useState("");

   async function fetchGlobal() {
       const response = await fetch("https://covid19.mathdro.id/api/");
       
       const data = await response.json();
       
           setGlobals(data);
   }
    useEffect(fetchGlobal, []);

    console.log(globals);
    // const {globals} = props;
    return(
        <>
        <GlobalSection >
          {globals && <Global status="Confirmed" value={globals.confirmed.value}/>}  
          {globals && <Global status="Recovered" value={globals.recovered.value}/> }  
          {globals && <Global status="Deaths" value={globals.deaths.value}/>}
        </GlobalSection>
        </>

    )
}

export default Status;