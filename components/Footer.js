import React from 'react'
import styles from "../styles/Footer.module.css"
import { SocialIcon } from "react-social-icons";



export default function Footer() {
  const media = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/Sandrine-Herrault-peintre/100063483909932/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sandrineherrault/",
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
    <div className={styles.mainContainer}>Footer<div>{mapMedia}</div></div>
  )
}
