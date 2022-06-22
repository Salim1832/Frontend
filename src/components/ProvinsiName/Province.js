import styles from "./Province.module.css"

function Province(props) {

    const {provinces} = props;
    return (
        <tbody className={styles.scroll}>
            <tr>
                <td className={styles.provinsi__tableinfo}>{provinces.kota}</td>
                <td className={styles.provinsi__tableinfo}>{provinces.kasus}</td>
                <td className={styles.provinsi__tableinfo}>{provinces.sembuh}</td>
                <td className={styles.provinsi__tableinfo}>{provinces.dirawat}</td>
                <td className={styles.provinsi__tableinfo}>{provinces.meninggal}</td>
            </tr>
        </tbody>
    );
}

export default Province;