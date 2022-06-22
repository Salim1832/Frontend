import { useEffect, useState } from "react";
import styles from "./Global.module.css";

// Tangkap props
function Global(props) {

   
    // Destructing object props
    const {global} = props;
    
    return(
        <div className={styles.global__card}>
            <div className={styles.global__box}>
                <p className={styles.global__result}>{global.status}</p>
                <h2 className={styles.global__info}>{global.total}</h2>
            </div>
        </div>
    );
}

export default Global;