import { PageDescription } from "../components/PageDescription";
import { TeamItem } from "../components/TeamItems/TeamItem";
import styles from "../styles/Team.module.css";

const Team = () => {
    return (
        <>

        <PageDescription
        title="OMEGA - A TEAM UNIFIED IN AESTHETIC SPIRIT. 100+ ARTISTS IN OUR TEAM."
        text="Our specialists are able to approach a level of photorealism that is unmatched by other forms of representation."
      />

      <div className={styles.teamRow}>
        <TeamItem imgSrc='/img/team/TeamImg1.jpg' textName='ARTEM KUPRIIANENKO' textProf='CEO/FOUNDER' text='THE OMEGA RENDER DEVELOPMENT METHOD IS AN ABSOLUTE REFLECTION OF ARTEM’S INTERNAL POSITION. IT’S CONSTANT MOVEMENT WITH FULL PRODUCTIVITY - EACH ACTION SUFFUSED WITH A HARMONY BETWEEN TECHNOLOGY, CREATIVITY AND CHARISMA. IT IS THESE THREE VALUES THAT PERSONIFY ARTEM AND THE ENTIRE COMPANY.'/>
        <TeamItem imgSrc='/img/team/TeamImg2.jpeg' textName='JULIA ZAMELATSKAYA' textProf='COO' text="WE DON'T KNOW EXACTLY HOW A PERSON CAN CONTROL SO MANY PROCESSES AT THE SAME TIME, BUT JULIA DOES IT WITH EASE. STRONG TECHNICAL KNOWLEDGE COMBINED WITH LEADERSHIP SKILLS KEEPS TEAMS MOTIVATED AND ALIGNED IN ACHIEVING PROJECT SUCCESS."/>
        <TeamItem imgSrc='/img/team/TeamImg3.jpg' textName='SERG TOMAKH ' textProf='BUSINESS DEVELOPMENT MANAGER' text='AS BD MANAGER, SERG IS LOOKING BEYOND THE HORIZON TO SEE OUR PROSPECTS. AS BD MANAGER, SERG IS LOOKING BEYOND THE HORIZON TO SEE OUR PROSPECTS.'/>
        <TeamItem imgSrc='/img/team/TeamImg4.jpg' textName='ALBINA BALIUK' textProf='CONTACT MANAGER' text='WHAT COULD BE BETTER THAN A QUICK, ACCURATE AND DETAILED REPLY TO YOUR REQUEST? YEP, NOTHING. ALBINA WILL TAKE CARE OF EVERYTHING RELATED TO YOU INITIAL ENQUIRY.'/>
      </div>

      <div className={styles.teamRow}>
        <TeamItem imgSrc='/img/team/TeamImg5.jpg' textName='SLAVIK PLIES' textProf='ART DIRECTOR' text='SLAVIK LIKES TO OBSERVE THE WORK OF OTHER ARTISTS. BUT HIS PASSION IS TO SHOW HIS EXPERTISE IN HIS CORRECTIONS. HE WANTS THE CLIENT TO NOT JUST BE PLEASED WITH THE RESULT, BUT TO BE IN AWE.'/>
        <TeamItem imgSrc='/img/team/TeamImg6.jpg' textName='VERONIKA VOLOVIK' textProf='PROJECT MANAGER' text='VERONICA HAS A LOT OF OUTSTANDING CHARACTERISTICS, BUT THE ONES WE VALUE MOST ARE HER KINDNESS AND PERFECTIONISM. WE ESPECIALLY APPRECIATE THE COMBINATION OF THESE QUALITIES IN HER WORK.'/>
        <TeamItem imgSrc='/img/team/TeamImg7.jpg' textName='Artem Perepelitsa' textProf='3D Artist' text='THE STRONGMAN, WHOSE STRENGTH CARRIES THROUGH TO HIS PERFECTIONIST WORK ON IMAGES. THIS IS SUPPORTED BY EVER-DEVELOPING STRATEGIC THINKING AND HIS IMAGES ALWAYS TELL A STORY.'/>
        <TeamItem imgSrc='/img/team/TeamImg8.jpg' textName='SERGEY SHELESTYUKOVICH' textProf='ART DIRECTOR' text='THERE’S AN OPINION THAT IT IS NATURAL TALENT WHICH MAKES A GREAT ARTIST. THEY ARE WRONG: IT’S CHARACTER. SERGEY KNOWS THAT HE IS A DEMANDING PERSON. BUT THIS FEATURE MAKES HIM A TRUE PROFESSIONAL AND HIS WORKS REAL MASTERPIECES.'/>
      </div>
      </>
    )
  };
  
  export default Team;