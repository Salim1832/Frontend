import FormCovid from "../../components/AddFormCovid/FormCovid";
import Hello from "../../components/Hello";
import Provinsi from "../../components/Provinsi/Provinsi";


function DataProvince({provinces, setProvinces}) {
    return (
        <>
            <Hello/>
            <Provinsi provinces={provinces} setProvinces={setProvinces}/>
            <FormCovid provinces={provinces} setProvinces={setProvinces}/>
        </>
            );
}

export default DataProvince;