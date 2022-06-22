import styles from "./Provinsi.module.css";

// Import data Provinsi
import data from "../../utils/constants/provinces";
import Province from "../ProvinsiName/Province";


function Provinsi(props){


    const {provinces} = props;
    // const covidsRedux =  useSelector((store) => store.covids.covids);

    // console.log(covidsRedux);

   

    return (
        <div className={styles.container}>
            <section className={styles.provinsi}>
                <h2 className={styles.provinsi__title}>Indonesia</h2>
                <p className={styles.provinsi__info}>Data Covid Berdasarkan Provinsi</p>
                <div className={styles.provinsi__container}>
                    <table className={styles.provinsi__table}>
                    <thead>
                        <tr>
                            <th className={styles.provinsi__tableinfo}>Provinsi</th>
                            <th className={styles.provinsi__tableinfo}>Positif</th>
                            <th className={styles.provinsi__tableinfo}>Sembuh</th>
                            <th className={styles.provinsi__tableinfo}>Dirawat</th>
                            <th className={styles.provinsi__tableinfo}>Meninggal</th>
                        </tr>
                        
                    </thead> 
                        {provinces.map(function(data){
                            
                            return <Province key={data.kota} provinces={ data }/>
                            })} 
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Provinsi;

// const [provs, setProvs] = useState(data);

// function provss(){
//     const prov = {
//         kota: "Cibinong",
//         kasus: 0,
//         sembuh: 0,
//         dirawat: 0,
//         meninggal: 0,
//     };

//     setProvs([...provs, prov])
// }