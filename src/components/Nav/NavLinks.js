import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as navStyles from '../../styles/navigation.module.css';

export default function NavLinks() {
  const [opemnLitePaperMenu, setOpemnLitePaperMenu] = React.useState(false);

  return (
    <div className={navStyles.flexAlignCenter}>
      <div className={navStyles.navLink}>
        <p>Tokenomics</p>
      </div>
      <div className={navStyles.noHoverLink}>
        <p>Roadmap</p>
      </div>
      <div className={navStyles.litePaperNavContainer}>
        <div
          className={navStyles.litePaperNavLink}
          onClick={() => setOpemnLitePaperMenu((prev) => !prev)}
        >
          <p>
            Litepaper{' '}
            <FontAwesomeIcon
              icon={['fas', 'caret-down']}
              style={{ fontSize: '20px', marginTop: -10, marginLeft: 10 }}
            />
          </p>
        </div>

        {opemnLitePaperMenu && (
          <div className={navStyles.litePaperMenu}>
            <a
              className={navStyles.languageItem}
              href='../docs/GRAPE_Protocol_Litepaper.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              English
            </a>
            <a
              className={navStyles.languageItem}
              href='../docs/GRAPE_Protocol_Litepaper_Chinese.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              Chinese
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
