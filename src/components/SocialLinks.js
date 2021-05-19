import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '../styles/navigation.module.css';

export default function SocialLinks() {
  return (
    <div>
      <a target='_blank' href='https://twitter.com/solanagrape'>
        <FontAwesomeIcon icon={['fab', 'twitter']} className={icon} />
      </a>
      <a target='_blank' href='https://discord.gg/greatape'>
        <FontAwesomeIcon icon={['fab', 'discord']} className={icon} />
      </a>
      <a target='_blank' href='https://www.twitch.tv/whalesfriend'>
        <FontAwesomeIcon icon={['fab', 'twitch']} className={icon} />
      </a>
      <a target='_blank' href='https://medium.com/great-ape'>
        <FontAwesomeIcon icon={['fab', 'medium-m']} className={icon} />
      </a>
    </div>
  );
}
