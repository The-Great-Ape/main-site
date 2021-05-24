import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, flexAlignCenter } from '../../styles/navigation.module.css';

export default function SocialLinks() {
  return (
    <div className={flexAlignCenter}>
      <a target='_blank' href='https://twitter.com/solanagrape' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={['fab', 'twitter']} className={icon} style={{ fontSize: '25px' }} />
      </a>
      <a target='_blank' href='https://discord.gg/greatape' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={['fab', 'discord']} className={icon} style={{ fontSize: '25px' }} />
      </a>
      <a target='_blank' href='https://www.twitch.tv/whalesfriend' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={['fab', 'twitch']} className={icon} style={{ fontSize: '25px' }} />
      </a>
      <a target='_blank' href='https://medium.com/great-ape' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={['fab', 'medium-m']} className={icon} style={{ fontSize: '25px' }} />
      </a>
    </div>
  );
}
