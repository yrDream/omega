import { ContactUsBlockLink } from "../components/ContactUsBlockLink";
import { PageDescription } from "../components/PageDescription";
import { ServicesItem1 } from "../components/ServicesItems/ServicesItem1";
import { ServicesItem2 } from "../components/ServicesItems/ServicesItem2";
import { ServicesItem3 } from "../components/ServicesItems/ServicesItem3";
import { ServicesItem4 } from "../components/ServicesItems/ServicesItem4";
import { ServicesItem5 } from "../components/ServicesItems/ServicesItem5";
import { ServicesItem6 } from "../components/ServicesItems/ServicesItem6";
import { TextList } from "../components/TextList";
import styles from "../styles/Service.module.css";

const Service = () => {
  return (
    <>
      <PageDescription
        title="3D Architectural Rendering Services"
        text="Our extensive experience enables us to help you with different representations of your idea. Our specialists are able to approach a level of photorealism that is unmatched by other forms of representation. We are always focused on artistic properties, lighting solutions, and spatial characteristics in all the visual forms that we’re creating."
      />

      <div className={styles.container}>
        <ServicesItem1 />
        <ServicesItem2 />
        <ServicesItem3 />
        <ServicesItem4 />
        <ServicesItem5 />
        <ServicesItem6 />
      </div>
      <div className={styles.containerContact}>
      <ContactUsBlockLink />
      </div>

      <TextList />
      
    </>
  );
};

export default Service;
