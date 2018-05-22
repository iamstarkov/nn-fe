import React from 'react';
import {Link} from 'react-router-dom';
import {distanceInWordsToNow} from 'date-fns';
import {api} from '../../utils';
import "./style.css"


export const NewsItem = ({id}) => {
    const item = api.getItem(id)
    const timeInMs = item.time * 1000;
    const age = distanceInWordsToNow(new Date(timeInMs));
    const comments = (item.descendants === 0) ? "discuss" : item.descendants + " comments";

    return (
        <div>
            <div className={"news_item"}>
                <a href={item.url} className={"title"}>{item.title}</a>
                <br/>
                <Link to={`/item/${item.id}`}>{item.score}</Link>
                {' by '}
                <Link to={`/item/${item.id}`}>{item.by}</Link>
                {' '}
                <Link to={`/item/${item.id}`}>{age}</Link>
                {'  | '}
                <Link to={`/item/${item.id}`}>{comments}</Link>
            </div>
        </div>
    )
}