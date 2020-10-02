import React from 'react';
import './menu-item.styles.scss';


export default function MenuItem({title, subTitle,imageUrl}) {
    const styles = {
        backgroundImage: `url(${imageUrl})`
    }
    return (
        <div className="menu-item" style={styles}>
            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="sub-title">{subTitle}</span>
            </div>
        </div>
    )
}