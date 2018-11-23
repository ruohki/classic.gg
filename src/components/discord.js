import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
 
import { container } from './discord.module.scss';

const Discord = () => (
  <div className={container}>
    <a href="https://discord.gg/2SYCwNX" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faDiscord} />
    </a>
  </div>
);

export default Discord;