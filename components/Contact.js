import React from "react";
import styles from "../styles/Contact.module.css";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function Contact() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Se rencontrer</h1>
      <div className={styles.container1}>
        {/* <img src="/portrait-2.jpg" alt='photoBio' className={styles.imgPortrait} /> */}
        <div className={styles.rdvContainer}>
          <p>
            Je vous reçois au <strong>Zen center</strong> 125 Ter Avenue de
            Fontainebleau 77310 Saint-Fargeau-Ponthierry.
          </p>
          <p>
            Je me déplace à domicile et dans les villes avoisinantes autour de
            Ponthierry.
          </p>
          <p>J'interviens également dans les centres sociaux et culturels</p>{" "}
          <p>N'hésitez pas à me contacter pour plus de précisions.</p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <AiOutlineMail style={{ marginRight: "10px" }} />
            goncalvesmaria1@live.fr
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <AiOutlinePhone style={{ marginRight: "10px" }} />
            06 47 88 95 87
          </p>
        </div>
      </div>
    </div>
  );
}
