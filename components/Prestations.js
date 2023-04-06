import React from "react";
import styles from "../styles/Prestations.module.css";

export default function Prestations() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Mes formations pour vous accompagner </h1>
      <div className={styles.container1}>
        {/* <img src="" className={styles.imgPortrait} alt="" /> */}
        <div className={styles.prestaContainer}>
          <p>
            Je suis certifiée au massage parents-bébé par l'Association
            Internationale de Massage pour Bébé (IAIM) depuis 2013.
          </p>
          <p>
            Le massage des bébés est un art traditionnel indien qui contribue à
            relaxer, soulager, stimuler et renforcer le lien avec son
            tout-petit.
          </p>
          <p>
            Ma curiosité et un intérêt de cœur m'ont plongé dans cet univers
            maman-bébé autour du maternage proximal, l'éducation positive et
            bienveillante, la communication non-violente, tous les moyens
            permettant d'accompagner la maman et son tout-petit avec douceur.
          </p>
          <p>
            Pour poursuivre dans cet univers doux et bienveillant, je suis
            Facilitatrice de cercles mamans-bébés depuis 2021.
          </p>
          <p>
            Ces cercles sont un temps sacré dédié à la maman et à son tout-petit
            pour la création du lien avec son bébé mais aussi avec les autres
            mamans participantes.
          </p>
          <p>
            Je suis par ailleurs Praticienne Reiki, soin énergétique doux et
            méditatif qui permet de rééquilibrer le corps et apaiser le mental
            pour plus de mieux-être et de reconnexion à soi.{" "}
          </p>
          <p>
            Ce soin s'adresse aux mamans mais aussi à toutes les personnes le
            souhaitant.
          </p>
        </div>
      </div>
    </div>
  );
}
