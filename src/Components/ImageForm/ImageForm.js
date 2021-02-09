import React from 'react';

import './ImageForm.scss';


const ImageForm = () => {
    return(
        <div className="container">
            <p>This app can detect face in picture.</p>
            <div className="inner-container">
                <input type="text"/>
                <button className="ripple">Detect</button>
            </div>
        </div>
    )
};

export default ImageForm;