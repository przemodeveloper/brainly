import React from 'react';

import Tilt from 'react-tilt'
import './Logo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
    return(
        <div>
            <Tilt className="Tilt background" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><FontAwesomeIcon icon={faDna} /></div>
            </Tilt>
        </div>
    )
};

export default Logo;

