import React from 'react';

import './ImageForm.scss';


const ImageForm = ({ onInputChange, onSubmitImage }) => {
    return(
        <div className="container">
            <p>This app can detect face in picture.</p>
            <div className="inner-container">
                <input type="text" onChange={onInputChange}/>
                <button className="ripple" onClick={onSubmitImage}>Detect</button>
            </div>
        </div>
    )
};

export default ImageForm;