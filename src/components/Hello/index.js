import images from "../Hello/asset/undraw_medical_care_movn.svg";
import Button from "../ui/Button";
import StyledHello from "./index.styled";



function Hello() {

  return (
    <>
      <StyledHello>
      <section className="hello">
        <div className="hello__left">
          <h2>Covid ID</h2>
          <p className="hello__info">Monitoring Perkembangan Covid</p>
          <p className="hello__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugiat aliquid nostrum eligendi nemo laboriosam, accusantium, quae necessitatibus libero dolorum placeat impedit, maxime modi alias itaque tempore amet corrupti! Qui.</p>
          <Button variant="primary">Vaccine</Button>
        </div>
        <div className="hello__right"><img src={images} alt="" /></div>
      </section>
    </StyledHello>
    </>
  );
}

export default Hello;
