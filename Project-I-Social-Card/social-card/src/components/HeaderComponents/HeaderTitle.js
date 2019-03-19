import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="header-title-container">
        <h2 className="header-title">Lambda School</h2>
        <p className="header-link">@LambdaSchool</p>
        <p className="header-time"> 18 Mar</p>
        </div>
    );
}

export default HeaderTitle;