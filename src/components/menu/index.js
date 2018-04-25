import React from 'react';
import './style.css';

export const Menu = ({links}) => (
    <ul className={"menu"}>
        {links.map(item => (
                <li key={item.url} className={" unstyle menu__item"}>
                    <a href={item.url}>{item.text}</a>
                </li>
            )
        )}
    </ul>
);

