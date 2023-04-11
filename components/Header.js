import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
  });
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);
    console.log(isMobile);
  }, [isMobile]);

  const clickHamburger = () => {
    if (modalOpen) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  };

  const openModal = (
    <FaBars size="40px" color="white" onClick={() => clickHamburger()} />
  );

  const closeModal = (
    <FaTimes size="40px" color="white" onClick={() => clickHamburger()} />
  );

  const mobileNav = (
    <header
      className={
        scroll ? styles.mainContainerMobileScroll : styles.mainContainerMobile
      }
    >
      <h1>Maria Goncalves</h1>
      <div className={styles.skillsMContainer}>
        <div className={styles.skillM}>Séances massages parents-bébés</div>
        <div className={styles.skillM}>Renforcer le lien</div>
        <div className={styles.skillM}>Cercles mamans-bébés</div>
        <div className={styles.skillM}>Soutien, partages, échanges</div>
      </div>
      <nav
        className={styles.navContainer}
        style={{ visibility: modalOpen ? "visible" : "hidden" }}
      >
        <a href="/">Accueil</a>
        <a href="#me" onClick={() => setModalOpen(false)}>
          Qui suis-je ?
        </a>
        <a href="#prestations" onClick={() => setModalOpen(false)}>
          Prestations
        </a>
        <a href="#contactMe" onClick={() => setModalOpen(false)}>
          Me contacter
        </a>

        <FaTimes
          className={styles.closeHamburger}
          size="40px"
          color="#086788"
          onClick={clickHamburger}
        />

        {/* {!modalOpen ? openModal : closeModal} */}
      </nav>

      <FaBars size="40px" color="#086788" onClick={clickHamburger} />
    </header>
  );

  const navBar = (
    <header
      className={scroll ? styles.mainContainerScroll : styles.mainContainer}
    >
      <h1>Maria Goncalves</h1>
      <div className={styles.skillsMContainer}>
        <div className={styles.skillM}>Séances massages parents-bébés</div>
        <div className={styles.skillM}>Renforcer le lien</div>
        <div className={styles.skillM}>Cercles mamans-bébés</div>
        <div className={styles.skillM}>Soutien, partages, échanges</div>
      </div>

      <nav>
        <a href="/">Accueil</a>
        <a href="#me">Qui suis-je ?</a>
        <a href="#prestations">Prestations</a>
        <a href="#contactMe">Me contacter</a>
      </nav>
    </header>
  );

  return <>{isMobile ? mobileNav : navBar}</>;
}
