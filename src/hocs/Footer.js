import React from 'react';
import Social from '../Components/Social';

const footer = (props) => (
    <div>
        <Social />
        {props.children}
    </div>
);

export default footer