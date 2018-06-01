import React from 'react';
import './style.css';
import {NewsItem} from "..";

export const NewsItemList = ({ids}) => (
    <ol className="news_item">
        {ids.map(id => (
                <li key={id} className={"news_item"}>
                    <NewsItem id={id}/>
                </li>
            )
        )}
    </ol>
);

