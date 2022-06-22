import styles from "./FormCovid.module.css";
import assets from "../AddFormCovid/Assets/undraw_forms_re_pkrt (1).svg";
import { useState } from "react";
import data from "../../utils/constants/provinces";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";


function FormCovid(props) {

    const {provinces, setProvinces} = props;

    // Membuat state Provinsi
    const [province, setProvince] = useState("");

    // Membuat state status
    const [status, setStatus] = useState("");

    // Membuat state jumlah
    const [result, setResult] = useState("");

    // Membuat state dan jumlah
    const [isResultError, setIsResultError] = useState(false);

    // Membuat fungsi handle
    function handleProvince(e) {
        setProvince(e.target.value);
    }
    
    function handleStatus(e){
        setStatus(e.target.value);
    }

    function handleResult(e){
        setResult(e.target.value);
    }

    // Menghandle ketika form disubmit
    function handleSubmit(e){
        // Mencegah prilaku default (refersh)
        e.preventDefault();

        // jika jumlah kosong, maka set error title true
        if (result == "") {
            setIsResultError(true);
        }
        // Jika tidak kosong, tambah data
        else {
            // Cari index dan provinsi yang ingin diupdate
            const index = provinces.findIndex((data) => data.kota === province);
            const foundProvince = provinces.find((data) => data.kota === province);

            /**
             * Cek apakah ada status berdasarkan kasus, sembuh, dirawat dan meninggal
             * jika iya, akses provinsi yang ingin diupdate menggunakan index
             * copy data provinsi yang ingin diupdate
             * update status provinsi tersebut
             */
            if (status === "kasus") {
                provinces[index] = {
                    ...foundProvince, 
                    kasus: parseInt(foundProvince.kasus) + parseInt(result),
                };
            } else if (status === "sembuh") {
                provinces[index] = {
                    ...foundProvince,
                    sembuh: parseInt(foundProvince.sembuh) + parseInt(result),
                };
            }else if (status === "dirawat") {
                provinces[index] = {
                    ...foundProvince,
                    dirawat: parseInt(foundProvince.dirawat) + parseInt(result),
                };
            }else if (status === "meninggal") {
                provinces[index] = {
                    ...foundProvince,
                    meninggal: parseInt(foundProvince.meninggal) + parseInt(result),
                };
            }
            setProvinces([...provinces]);
            setIsResultError(false);
        }
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__image} src={assets} alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>FORM COVID</h2>
                    <form onSubmit={handleSubmit} action="">
                        <div className={styles.form__group}>
                            <label className={styles.form__label} htmlFor="">Provinsi</label>
                            <select value={province} onChange={handleProvince} name="province" id="province" className={styles.form__select}>
                                {
                                    provinces.map(function(data){
                                        return (
                                            <option key={data.kota} value={data.kota}>{data.kota}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className={styles.form__group}>
                            <label className={styles.form__label} htmlFor="">Status</label>
                                <select value={status} onChange={handleStatus} className={styles.form__select} name="Status" id="Status">
                                    <option value="kasus">Positif</option>
                                    <option value="sembuh">Sembuh</option>
                                    <option value="dirawat">Dirawat</option>
                                    <option value="meninggal">Meninggal</option>
                                </select>
                        </div>
                        <div className={styles.form__group}>
                            <label className={styles.form__label} htmlFor="">Jumlah</label>
                            <input 
                            id="result"
                            type="number"
                            value={result}
                            className={styles.form__input}
                            onChange={handleResult} 
                            />
                            {isResultError && <Alert><p className={styles.form__alert}>Jumlah Wajib Diisi!</p></Alert>}
                        </div>
                        <div>
                            <button className={styles.form__bottom}>Submit</button>
                            {/* <Button variant="secondary">Submit</Button> */}
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default FormCovid;