import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as navStyles from "../../styles/navigation.module.css";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function NavLinks() {
  const [openLitePaperMenu, setOpenLitePaperMenu] = React.useState(false);
  let menuRef = React.useRef();

  React.useEffect(() => {
    let handler = (e) => {
      if (menuRef && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenLitePaperMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={navStyles.flexAlignCenter}>
    <AnchorLink to="#tokenomics" title="Tokenomics" className={navStyles.navLink}>
        <div >
          <p>Tokenomics</p>
        </div>
      </AnchorLink>
      <div className={navStyles.noHoverLink}>
        <p>Roadmap</p>
      </div>
      <div className={navStyles.litePaperNavContainer} ref={menuRef}>
        <div
          className={navStyles.litePaperNavLink}
          onClick={() => setOpenLitePaperMenu((prev) => !prev)}
        >
          <p>
            Litepaper{" "}
            <FontAwesomeIcon
              icon={["fas", "caret-down"]}
              style={{ fontSize: "20px", marginLeft: "5px", marginTop: "-5px" }}
            />
          </p>
        </div>

        {openLitePaperMenu && (
          <div className={navStyles.litePaperMenu}>
            <a
              className={navStyles.languageItem}
              href="./GRAPE_Protocol_Litepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              English
            </a>
            <a
              className={navStyles.languageItem}
              href="./GRAPE_Protocol_Litepaper_Chinese.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chinese
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
