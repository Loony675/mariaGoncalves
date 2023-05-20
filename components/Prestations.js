import React from "react";
import styles from "../styles/Prestations.module.css";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { useState } from "react";

export default function Prestations() {
  const [clickPresta1, setPresta1] = useState(false);
  const [clickPresta2, setPresta2] = useState(false);
  const [clickPresta3, setPresta3] = useState(false);

  const presta1 = () => {
    if (clickPresta1) {
      setPresta1(false);
    } else {
      setPresta1(true);
    }
  };
  const presta2 = () => {
    if (clickPresta2) {
      setPresta2(false);
    } else {
      setPresta2(true);
    }
  };
  const presta3 = () => {
    if (clickPresta3) {
      setPresta3(false);
    } else {
      setPresta3(true);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.prestaContainer}>
        <div className={styles.presta} onClick={() => presta1()}>
          {clickPresta1 ? (
            <BsFillArrowUpCircleFill style={{ marginRight: "5px" }} />
          ) : (
            <BsFillArrowDownCircleFill style={{ marginRight: "5px" }} />
          )}
          <div>Séances massages parents-bébés</div>
        </div>
        {clickPresta1 && (
          <div className={styles.massagesContainer}>
            <h3>Massage parents-bébés</h3>
            <p className={styles.citations}>
              "Le toucher est le premier sens se développant in utero. Il a une
              place vitale pendant l'enfance et tout au long de la vie. Le
              toucher est fondamental pour renforcer le lien entre la maman, le
              papa ou la personne référente"
            </p>
            <img src="/hands.jpg" className={styles.imgHands} />
            <p>
              Venez apprendre à masser votre bébé dans une atmosphère
              chaleureuse et bienveillante, en respectant votre rythme et celui
              de votre enfant.
            </p>
            <p className={styles.citations}>
              " Le massage est un merveilleux moment de partage et d'affection
              avec votre bébé, c'est un moment privilégié en face à face, qui
              permet au bébé de s'épanouir pleinement en étant sécurisé,
              valorisé, aimé et écouté."
            </p>
            Art traditionnel venant d'Inde
          </div>
        )}

        <div className={styles.presta} onClick={() => presta2()}>
          {clickPresta2 ? (
            <BsFillArrowUpCircleFill style={{ marginRight: "5px" }} />
          ) : (
            <BsFillArrowDownCircleFill style={{ marginRight: "5px" }} />
          )}
          <div>Cercles mamans-bébés</div>
        </div>
        <div className={styles.presta} onClick={() => presta3()}>
          {clickPresta3 ? (
            <BsFillArrowUpCircleFill style={{ marginRight: "5px" }} />
          ) : (
            <BsFillArrowDownCircleFill style={{ marginRight: "5px" }} />
          )}
          <div>Séances Reiki</div>
        </div>
        {clickPresta3 && (
          <div className={styles.massagesContainer}>
            <h3>Le reiki</h3>Le reiki est une méthode de soin japonaise
            appartenant à l'approche énergétique. En japonais Rei veut dire
            universel et inclut la matière et l'esprit. Ki renvoie à l'energie
            vitale qui circule en nous. Par imposition des mains, je vous
            permets la mise en contact de l'énergie universelle et votre propre
            force vitale dans le but d'éveiller un processus dynamique de
            guérison. Je vous accompagne dans une profonde relaxation et dans un
            véritable voyage intérieur, en contact avec la dimension spirituelle
            de votre Être. Le soin reiki apporte au receveur calme et paix
            intérieure, apaise l'activité mentale, vitalise corps et esprit,
            rééquilibre la balance énergétique du corps. C'est un véritable
            moment méditatif et de retour à soi. La séance se pratique habillé
            sur table de massage. Durée du soin 1h30/60€
          </div>
        )}
      </div>
      <div>
        {" "}
        <img
          src="/portrait-2.jpg"
          alt="photoBio"
          className={styles.imgPortrait}
        />
      </div>
      <div className={styles.skills}>
        <div>Auxiliaire de puériculture DE</div>
        <div>Certifiée en massage pour bébés</div>
        <div>Facilitatrice de cerlces mamans-bébés</div>
        <div>Praticienne Reiki (soin énergétique)</div>
      </div>
    </div>
  );
}
