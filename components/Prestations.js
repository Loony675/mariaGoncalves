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
        {!clickPresta1 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/hands.jpg" className={styles.imgHands} />
          </div>
        )}
        {clickPresta1 && (
          <div className={styles.massagesContainer}>
            <h2>Massage parents-bébés</h2>
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
            <p>Art traditionnel venant d'Inde</p>
            <p>
              Transmission d'un art traditionnel venant d'Inde ☀️Le massage
              Shantala ☀️
            </p>
            <p>
              S'adressant aux parents accompagnés de leur bébé de 1 à 12 mois
            </p>
            <p>
              Les séances massage bébé se déroulent sur 4 semaines consécutives,
              rythme adapté à votre bébé et à ses parents afin d'intégrer tous
              les mouvements de massage et tisser les liens les plus précieux
              avec votre bébé ✨
            </p>
            <h3>Tarifs:</h3>
            <p>
              Au cabinet:<br></br> En individuel 1h30 // 50 €<br></br> En
              collectif 2h // 40 €<br></br>
              <p>
                Frais de déplacement à domicile autour de Ponthierry : 10€ // 20
                km
              </p>
            </p>
            <img src="setup.webp" className={styles.imgSetup} />
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
        {!clickPresta2 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/cercleMB1.jpeg" className={styles.imgReiki} />
          </div>
        )}
        {clickPresta2 && (
          <div className={styles.massagesContainer}>
            <h3 style={{ textTransform: "italic" }}>
              "On ne naît pas mère on le devient"
            </h3>
            <p>
              Soutien à la parentalité pendant la période postnale, la
              matrescence en toute bienveillance.
            </p>
            <p>
              Être bichonnées, écoutées, rassurées autant de besoins pour les
              jeunes mamans pendant cette période intense et si fragile à la
              fois
            </p>
            <p>
              C'est ce qu'offre un cercle mamans-bébés Pour que chaque maman et
              chaque bébé repartent apaisé.
            </p>
            <img src="/cercleMB1.jpeg" className={styles.imgReiki} />
            <p>
              Les cercles mamans-bébés s'adressent aux mamans avec leurs bébés
              âgés de 0 à 9 mois.
            </p>
            <p>
              C'est une pause douceur et cocooning dans la vie des jeunes mamans
              pour :
            </p>
            <div>
              <p>
                🌺 Prendre soin d'elles et réfléchir aux valeurs de leur famille
              </p>
              <p>🌺 Sortir de leur quotidien</p>
              <p>🌺 Créer du lien avec leur bébé de façon ludique</p>
              <p>🌺 Rencontrer et échanger avec d'autres mamans</p>
            </div>
            <div>
              <h4>Déroulé d'un cercle mamans-bébés</h4>
              <p>
                L'ouverture du cercle commence par un instant bien-être pour se
                poser, se détendre, se recentrer grâce à des exercices de
                respiration, des auto-massages, de la méditation
              </p>
              <p>
                Le coeur du cercle est animé par des échanges, des partages, et
                des astuces de mamans, des transmissions et des ateliers
                créatifs.
              </p>
              <p>
                Le cercle se termine autour de petites douceurs et d'une boisson
                chaude pour réchauffer le corps et l'esprit, dégustées en pleine
                conscience.
              </p>
            </div>
            <div>
              <h4>Moments créatifs</h4>
              <p>Pour les bébés : berceuses, comptines, poèmes</p>
              <p>Pour les mamans: auto-massage, activités créatives d'objets</p>
              <p>
                Le lieu d'accueil est un espace chaleureux, doux, bienveillant
                et soutenant afin de faciliter la vie des mamans.
              </p>
              <p>
                Les bébés sont installés au centre du cercle sur des petits
                matelas, face à leur maman.
              </p>
              <p>
                Les mamans sont libres de répondre aux besoins de leur bébé à
                tout moment.
              </p>
              <p>
                Des jouets d'éveil sont mis à disposition ainsi qu'un coin
                change.
              </p>
            </div>
            <div>
              <h4>Modalités</h4>L'inscription se fait pour 4 rencontres Tarif
              160 euros Pour 1 rencontre, veuillez me contacter 4 rencontres, 4
              grands thèmes 💫 Le post-partum, la matrescence 💫 Les besoins de
              mon bébé 💫 Lien mère-bébé 💫 La famille, reprise du travail Le
              groupe est ouvert à 5 mamans accompagnées de leurs bébés. La durée
              et la régularité des rencontres permet la création du lien entre
              la maman et son bébé mais aussi entre les mamans participantes. Au
              fil des séances un climat de confiance va naître permettant à
              chacune de commencer à tisser son village.
            </div>
          </div>
        )}
        <div className={styles.presta} onClick={() => presta3()}>
          {clickPresta3 ? (
            <BsFillArrowUpCircleFill style={{ marginRight: "5px" }} />
          ) : (
            <BsFillArrowDownCircleFill style={{ marginRight: "5px" }} />
          )}
          <div>Séances Reiki</div>
        </div>
        {!clickPresta3 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/reiki.jpg" className={styles.imgReiki} />
          </div>
        )}

        {clickPresta3 && (
          <div className={styles.massagesContainer}>
            <h3>Le reiki</h3>
            <img src="/reiki.jpg" className={styles.imgReiki} />

            <p>
              Le reiki est une méthode de soin japonaise appartenant à
              l'approche énergétique. <br></br>En japonais, Rei veut dire
              universel et inclut la matière et l'esprit.<br></br> Ki renvoie à
              l'energie vitale qui circule en nous.
            </p>
            <p>
              Par imposition des mains, je vous permets la mise en contact de
              l'énergie universelle et votre propre force vitale dans le but
              d'éveiller un processus dynamique de guérison.
            </p>
            <p>
              Je vous accompagne dans une profonde relaxation et dans un
              véritable voyage intérieur, en contact avec la dimension
              spirituelle de votre Être.
            </p>
            <p>
              Le soin reiki apporte au receveur calme et paix intérieure, apaise
              l'activité mentale, vitalise corps et esprit, rééquilibre la
              balance énergétique du corps.
              <br></br>
              C'est un véritable moment méditatif et de retour à soi.
            </p>
            <p>
              La séance se pratique habillé sur table de massage.<br></br>Durée
              du soin 1h30/60€
            </p>
          </div>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <img
          src="/portrait-2.jpg"
          alt="photoBio"
          className={styles.imgPortrait}
        />
      </div>
      <div className={styles.skills}>
        <div>Auxiliaire de puériculture DE</div>
        <div>Certifiée en massage pour bébés</div>
        <div>Facilitatrice de cercles mamans-bébés</div>
        <div>Praticienne Reiki (soin énergétique)</div>
      </div>
    </div>
  );
}
