import React from 'react';
import Masthead from '../Components/Masthead';

const header = (props) => (
    <div>
        <Masthead />
        {props.children}
    </div>
);

export default header;