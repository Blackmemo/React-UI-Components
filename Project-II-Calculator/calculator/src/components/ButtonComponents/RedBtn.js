import React from 'react';
import './Button.css';

const redB = {
    height: '93px',
    width: '121px',
    backgroundColor: '#A0001E',
    color: 'white',
    fontSize: '2.7rem',
    textAlign: 'center'
}

const RedButton = props => (
    <button style={redB}>{props.buttonText}</button>
);

export default RedButton;