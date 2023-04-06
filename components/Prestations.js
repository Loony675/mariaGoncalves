import React from 'react'
import styles from '../styles/Prestations.module.css'

export default function Prestations() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Prestations</h1>
      <div className={styles.container1}>
        <img src="" className={styles.imgPortrait} alt='' />
        <div className={styles.bioContainer}>
          <p>
            Je suis Maria Goncalves, Auxiliaire de puériculture diplômée d'Etat.
          </p>
          <p>
            20 ans de regards et de soins attentifs, offerts aux enfants, m'ont
            amené à choisir et développer l'art du toucher, l'épanouissement des
            touts-petits et le bien-être parents-bébés.
          </p>
          <p>
            Sensible à l'accueil au monde du bébé, comme à son besoin vital
            d'affection et de sécurité, je sensibilise les nouveaux parents à
            l'art du toucher du nourrisson, à la compréhension de ses besoins
            essentiels, et enseigne avec douceur un riche partage, pour une
            détente familiale, et un nouvel éveil des sens vécu entre bébé, papa
            et maman.
          </p>
        </div>
      </div>
    </div>
  )
}
