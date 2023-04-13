import React from "react";
import styles from "../styles/Footer.module.css";
import { SocialIcon } from "react-social-icons";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsGeoAltFill } from "react-icons/bs";
import { IconContext } from "react-icons";
export default function Footer() {
  const onSubmit = (data) =>
    (window.location.href = `mailto:goncalvesmaria1@live.fr?subject=Prise de contact`);

  const media = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/maria.goncalves.357",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
  ];

  const mapMedia = media.map((data, i) => {
    return (
      <SocialIcon
        key={i}
        url={data.url}
        style={{
          backgroundColor: "transparent",
          height: 30,
          width: 30,
        }}
        className={styles.buttonHeader}
      />
    );
  });
  return (
    <div className={styles.mainContainer}>
      <div className={styles.skillsContainer}>
        <img src="/portrait-2.jpg" className={styles.imgPortrait} />
        <div style={{ marginLeft: "5px", lineHeight: "3px" }}>
          <p className={styles.skill}>Auxiliaire de puériculture D.E</p>
          <p className={styles.skill}>Certifiée en massage pour bébé</p>
          <p className={styles.skill}>Facilitatrice de cercles</p>
        </div>
      </div>
      <div className={styles.coordsContainer}>
        <div className={styles.telEmailSpot}>
          <IconContext.Provider value={{ className: styles.icons }}>
            <AiOutlinePhone />
          </IconContext.Provider>
          <div>06 47 88 95 87</div>
        </div>
        <div className={styles.telEmailSpot}>
          <IconContext.Provider value={{ className: styles.icons }}>
            <BsGeoAltFill  />
          </IconContext.Provider>
          Saint-Fargeau-Ponthierry
        </div>

        <div className={styles.telEmailSpot} onClick={() => onSubmit()}>
          <IconContext.Provider value={{ className: styles.icons }}>
            <AiOutlineMail/>
          </IconContext.Provider>
          goncalvesmaria1@live.fr
        </div>
      </div>
      <div>{mapMedia}</div>
    </div>
  );
}
