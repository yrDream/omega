import { ContactsItem } from "../components/Contacts/ContactsItem";
import { FormSendMess } from "../components/FormSendMess";
import { PageDescription } from "../components/PageDescription";
import styles from "../styles/Contacts.module.css";

const Contacts = () => {
  return (
    <>
      <PageDescription
        title="WE ONLY CARE ABOUT THE ONE-OF-A-KIND MASTERPIECE THAT YOU’LL RECEIVE AT THE END OF OUR FIRST PROJECT."
        text="If you need any information regarding our services, we're eager to have a chat with you. We're devoted to interesting people with beautiful designs."
      />

      <div className={styles.container}>
          <FormSendMess />
        <div>
        <ContactsItem textName="Serg Tomakh" textProf="Business development manager" src="mailto:info@omegarender.studio" textLink="info@omegarender.studio" text="Serg is responsible for helping our clients during the first steps of cooperation. He will quickly provide you with informative answers to your questions, until we have enough information to start our work." />
        <ContactsItem textName="Julia Seliverstova" textProf="COO" src="mailto:zamjulia@omegarender.studio" textLink="zamjulia@omegarender.studio" text="Julia takes care of everything you can see. She leads and manages each project until the client is completely satisfied." />
        <ContactsItem textName="Artem Kupriianenko" textProf="CEO" src="mailto:info@omegarender.studio" textLink="artem@omegarender.studio" text="Artem is the voice of our brand. He spends hours to make our clients feel care and enjoy communication with the company. If you have any suggestions or ideas you can write him." />
        </div>
      </div>
    </>
  );
};

export default Contacts;
