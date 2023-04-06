import React from "react";
import styles from "../styles/Contact.module.css";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function Contact() {
  const onSubmit = (data) =>
    (window.location.href = `mailto:goncalvesmaria1@live.fr?subject=Prise de contact`);

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
          <p className={styles.contact} onClick={() => onSubmit()}>
            <AiOutlineMail style={{ marginRight: "10px", fontSize: "30px" }} />
            <text
              style={{
                fontStyle: "italic",
                fontWeight: "900",
                fontSize: "25px",
              }}
            >
              goncalvesmaria1@live.fr
            </text>
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <text
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "25px",
                display: "flex",
              }}
            >
              <AiOutlinePhone
                style={{ marginRight: "10px", fontSize: "30px" }}
              />

              <a
                href="tel:+0647889587"
                style={{
                  textDecoration: "none",
                  color: "black",
                  alignItems: "center",
                }}
              >
                06 47 88 95 87
              </a>
            </text>
          </p>
        </div>
      </div>
    </div>
  );
}
