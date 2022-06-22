import { useEffect, useState } from "react";
import styles from "./Global.module.css";

// Tangkap props
function Global(props) {

   
    // Destructing object props
    const {global, status, value} = props;
    console.log({status,value})
    
    
    return(
        <div className={styles.global__card}>
            <div className={styles.global__box}>
                <p className={styles.global__result}>{status}</p>
                <h2 className={styles.global__info}>{value}</h2>
            </div>
        </div>
    );
}

export default Global;