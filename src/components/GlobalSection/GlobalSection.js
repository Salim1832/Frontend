import Global from "../Global/Global";

// import data covid indonesia
import data from "../../utils/constants/indonesia";
import { useEffect, useState } from "react";
import StyledGlobalSection from "./GlobalSection.styled";

function GlobalSection(props){

    // membuat variable global
   const globals = data.indonesia;

   const {title, text} = props;


    return (
        <StyledGlobalSection>
            <section>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="global__container">
                    {/* looping data global
                    dengan map
                    kirin props global */}
                    {globals.map(function(global){
                        return <Global key={global.status} global = { global }/>
                    })}
                </div>
            </section>
        </StyledGlobalSection>
    )
}

export default GlobalSection;