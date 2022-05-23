import { ContactUsBlockLink } from "../components/ContactUsBlockLink";
import { HomeItem1 } from "../components/HomeItems/HomeItem1";
import { HomeItem2 } from "../components/HomeItems/HomeItem2";
import { HomeItem3 } from "../components/HomeItems/HomeItem3";
import { HomeItem4 } from "../components/HomeItems/HomeItem4";
import { HomeItem5 } from "../components/HomeItems/HomeItem5";
import { HomeItem6 } from "../components/HomeItems/HomeItem6";
import { HomeItem7 } from "../components/HomeItems/HomeItem7";
import { HomeItem8 } from "../components/HomeItems/HomeItem8";
import { HomeItem9 } from "../components/HomeItems/HomeItem9";
import { PageDescription } from "../components/PageDescription";
import { TextList } from "../components/TextList";
import styles from "../styles/Home.module.css";

// if (typeof window !== "undefined") {
//   const scrollHeight = document.getElementById("homeItem2").scrollHeight;
//   console.log(scrollHeight);
// } else {
//   console.log("You are on the server");
// }

export default function Home() {
  return (
    <>
      <PageDescription
        title="3d Architectural Rendering and Visualization Studio"
        text="Producing images, you want to be in. We’re creating a powerful non-existent reality. 3D rendering for architects, developers, branding agencies and product design companies."
      />
      <div className={styles.homeRow}>
        <HomeItem1 />
        <HomeItem2 />
      </div>
      <div className={styles.homeRow}>
        <HomeItem3 />
      </div>
      <div className={styles.homeRow}>
        <HomeItem4 />
      </div>
      <div className={styles.homeRow}>
        <HomeItem5 />
        <HomeItem6 />
      </div>
      <div className={styles.homeRow}>
        <HomeItem7 />
        <HomeItem8 />
      </div>
      <div className={styles.homeRow}>
        <HomeItem9 />
      </div>

      <ContactUsBlockLink />

      <div className={styles.homeRow}>
        <TextList />
      </div>
    </>
  );
}
