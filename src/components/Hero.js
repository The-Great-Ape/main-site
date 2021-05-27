import * as React from "react";
import logo from "../images/logo.png";
import solanaSzn from "../images/BACKGROUND_HACKATHON.png";
import * as styles from "../styles/hero.module.css";
import { StaticQuery, graphql } from "gatsby";

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          contentfulAsset(contentful_id: {eq: "4BngtF1Q35XGB6DZPKBWxr"}) {
            fixed(width: 1600) {
              src
            }
          }
        }
      `}
      render={(data) => {
        console.log(data)
        return (
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <img
              src={logo}
              alt="Great Ape hero logo image"
              className={styles.heroLogo}
            />
            <h1 className={styles.heroHeading}>
              SUPPORT FOR SOLANA GATED COMMUNITIES
            </h1>
            <p className={styles.text}>
              Enabling a participation economy, linking ownership of social
              accounts to blockchain addresses and providing SPL - Token wallets
              to all community users.
            </p>
          </div>

          <div className={styles.rightSection}>
            <img
              src={data.contentfulAsset.fixed.src}
              alt="Solana season hackathon"
              className={styles.solanaSznImage}
            />
          </div>
        </div>
      )}}
    />
  );
};

export default Hero;
