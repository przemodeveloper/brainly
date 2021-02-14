import React from 'react';

import './FaceRecognition.scss';

const FaceRecognition = ({ imageURL, box }) => {
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="absolute mt2">
                {imageURL && <img src={imageURL} id="faceimage" alt="face" width="500px" height="auto"/>}
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
};

export default FaceRecognition;
